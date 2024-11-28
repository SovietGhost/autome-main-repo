"use server";

import { redirect } from "next/navigation";
import { db } from "~/server/db";

import { headers } from "next/headers";
import { getServerSideAuth } from "~/server/auth";

export async function enableAuction(id: number) {
  const session = await getServerSideAuth(headers());

  if (session?.user.role !== "admin") {
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
  const session = await getServerSideAuth(headers());

  if (session?.user.role !== "admin") {
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
