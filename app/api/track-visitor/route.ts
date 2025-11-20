import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { page } = await request.json();

    const forwardedFor = request.headers.get("x-forwarded-for");
    const rawIp =
      (forwardedFor ? forwardedFor.split(",")[0]?.trim() : undefined) ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-client-ip") ||
      request.headers.get("fastly-client-ip") ||
      request.headers.get("true-client-ip") ||
      request.headers.get("cf-pseudo-ipv4") ||
      request.headers.get("x-forwarded-host") ||
      request.headers.get("request-ip") ||
      request.headers.get("remote-addr") ||
      "unknown";

    const userAgent = request.headers.get("user-agent") || "unknown";

    const ipAddress =
      rawIp !== "unknown"
        ? rawIp
        : `anonymous-${createHash("sha256")
            .update(userAgent)
            .digest("hex")
            .slice(0, 12)}`;

    const existingVisitor = await prisma.visitor.findFirst({
      where: { ipAddress },
    });

    let city: string | null = existingVisitor?.city ?? null;
    let country: string | null = existingVisitor?.country ?? null;

    const shouldLookupLocation = !existingVisitor || !city || !country;
    const canLookupLocation =
      rawIp !== "unknown" && !ipAddress.startsWith("anonymous-");

    if (shouldLookupLocation && canLookupLocation) {
      try {
        const geoResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`, {
          headers: { Accept: "application/json" },
          next: { revalidate: 86400 },
        });

        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          city = geoData.city ?? city;
          country = geoData.country_name ?? geoData.country ?? country;
        }
      } catch (geoError) {
        console.warn("Visitor geolocation lookup failed", geoError);
      }
    }

    if (existingVisitor) {
      await prisma.visitor.update({
        where: { id: existingVisitor.id },
        data: {
          visitedAt: new Date(),
          visitCount: existingVisitor.visitCount + 1,
          userAgent,
          page: page || "/",
          city: city ?? null,
          country: country ?? null,
        },
      });
    } else {
      await prisma.visitor.create({
        data: {
          ipAddress,
          userAgent,
          page: page || "/",
          city: city ?? null,
          country: country ?? null,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      { error: "Failed to track visitor" },
      { status: 500 }
    );
  }
}
