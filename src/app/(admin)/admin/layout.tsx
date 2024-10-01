import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  auth().protect();
  const user = await currentUser();

  if (user?.privateMetadata.admin) {
    return <>{children}</>;
  }

  return <div>Access denied</div>;
}
