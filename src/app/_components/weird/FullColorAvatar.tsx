"use client";

import React, { useMemo } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { generateMetallicAvatar } from "./avatarGenerator";

interface FullColorAvatarProps {
  userId: string;
  image?: string;
  size?: number;
  className?: string;
}

export function FullColorAvatar({
  userId,
  image,
  size = 40,
  className = "",
}: FullColorAvatarProps) {
  const avatarUrl = useMemo(
    () => generateMetallicAvatar(userId, size),
    [userId, size],
  );

  return (
    <Avatar
      className={`${className} metallic-avatar transition-all duration-300 hover:brightness-110 hover:filter`}
    >
      <AvatarImage
        src={image ?? avatarUrl}
        alt={`Avatar for user ${userId}`}
        className="transition-all duration-300 hover:contrast-125 hover:filter"
      />
      <AvatarFallback>{userId.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
}
