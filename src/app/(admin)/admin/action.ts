"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export async function enableAuction(id: number) {
  auth().protect();
  const user = await currentUser();

  if (!user?.privateMetadata.admin) {
    throw new Error("Access denied");
  }

  await db.auction.update({
    where: {
      id,
    },
    data: {
      enabled: true,
    },
  });

  redirect("/admin?q=" + Date.now());
}

export async function disableAuction(id: number) {
  auth().protect();
  const user = await currentUser();

  if (!user?.privateMetadata.admin) {
    throw new Error("Access denied");
  }

  await db.auction.update({
    where: {
      id,
    },
    data: {
      enabled: false,
    },
  });

  redirect("/admin?q=" + Date.now());
}
