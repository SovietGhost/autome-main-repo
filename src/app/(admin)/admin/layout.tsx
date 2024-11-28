import { headers } from "next/headers";
import { getServerSideAuth } from "~/server/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSideAuth(headers());

  if (session?.user.role === "admin") {
    return <>{children}</>;
  }

  return <div>Access denied</div>;
}
