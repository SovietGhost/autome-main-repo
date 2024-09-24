import { UserProfile } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-max mx-auto py-4">
      <UserProfile />
    </div>
  );
}
