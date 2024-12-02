"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { User } from "better-auth";
import Link from "next/link";
import { authClient } from "~/server/auth/client";
import { useRouter } from "next/navigation";
import { FullColorAvatar } from "../weird/FullColorAvatar";

export function UserButton({ user }: { user: User }) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <FullColorAvatar
            className="h-10 w-10"
            userId={user.id}
            image={user.image ?? undefined}
          />
          {user.image ? null : (
            <p className="absolute bg-transparent text-white">
              {user.name
                .split(" ")
                .map((e) => e.charAt(0))
                .join("")}
            </p>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile/account-details"}>
            <DropdownMenuItem>Hesaba gir</DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            onClick={() =>
              authClient.signOut(undefined, {
                onSuccess: () => {
                  router.push("/auth/login");
                },
                onError: () => {
                  router.push("/auth/login");
                },
              })
            }
          >
            Hesabdan çıx
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
