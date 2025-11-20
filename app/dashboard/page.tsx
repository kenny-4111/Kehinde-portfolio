import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const visitors = await prisma.visitor.findMany({
    orderBy: { visitedAt: "desc" },
    take: 100,
  });
  const totalVisits = visitors.reduce(
    (count, visitor) => count + (visitor.visitCount ?? 0),
    0
  );

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-6">
      <h1 className="text-3xl font-semibold">Visitor Log</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm text-gray-500">Unique visitors</p>
          <p className="text-2xl font-semibold">{visitors.length}</p>
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm text-gray-500">Total visits</p>
          <p className="text-2xl font-semibold">{totalVisits}</p>
        </div>
      </div>
      <div className="grid gap-4">
        {visitors.map((visitor) => {
          const location = [visitor.city, visitor.country]
            .filter(Boolean)
            .join(", ");

          return (
            <article
              key={visitor.id}
              className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              <p>
                <strong>Location:</strong> {location || "Unknown"}
              </p>
              <p>
                <strong>IP:</strong> {visitor.ipAddress ?? "unknown"}
              </p>
              <p>
                <strong>User Agent:</strong> {visitor.userAgent ?? "unknown"}
              </p>
              <p>
                <strong>Page:</strong> {visitor.page ?? "/"}
              </p>
              <p>
                <strong>Visits:</strong> {visitor.visitCount ?? 1}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(visitor.visitedAt).toLocaleString()}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
