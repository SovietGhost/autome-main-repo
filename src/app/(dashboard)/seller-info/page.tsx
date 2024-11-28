import { getServerSideAuth } from "~/server/auth";
import EmailForm from "./_components/EmailForm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSideAuth(headers());

  if (!session) {
    return redirect("/");
  }

  return (
    <div>{session && session.user && <EmailForm user={session.user} />}</div>
  );
}
