import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  auth().protect();
  return (
    <div className="w-max mx-auto py-4">
      <UserProfile />
    </div>
  );
}
