import { getServerSideAuth } from "~/server/auth";
import Footer from "../_components/layout/Footer";
import Navbar from "../_components/layout/Navbar";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getServerSideAuth(headers());
  return (
    <>
      <Navbar user={user?.user} />
      {children}
      <Footer />
    </>
  );
}
