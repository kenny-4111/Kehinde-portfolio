import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DASHBOARD_PATH_PREFIX = "/dashboard";

function decodeBasicAuth(header: string) {
  const [, credentials] = header.split(" ");
  try {
    const decoded = atob(credentials ?? "");
    const separator = decoded.indexOf(":");
    if (separator === -1) {
      return { username: "", password: "" };
    }
    const username = decoded.slice(0, separator);
    const password = decoded.slice(separator + 1);
    return { username, password };
  } catch {
    return { username: "", password: "" };
  }
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (!pathname.startsWith(DASHBOARD_PATH_PREFIX)) {
    return NextResponse.next();
  }

  const expectedUsername = process.env.DASHBOARD_USERNAME;
  const expectedPassword = process.env.DASHBOARD_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    console.warn(
      "Dashboard middleware is bypassed because DASHBOARD_USERNAME/PASSWORD are not set."
    );
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization") ?? "";
  if (authHeader.startsWith("Basic ")) {
    const { username, password } = decodeBasicAuth(authHeader);
    if (username === expectedUsername && password === expectedPassword) {
      return NextResponse.next();
    }
  }

  const response = new NextResponse("Authentication required", { status: 401 });
  response.headers.set(
    "WWW-Authenticate",
    'Basic realm="Dashboard", charset="UTF-8"'
  );
  return response;
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
