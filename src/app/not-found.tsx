"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/";
    }
  });

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Səhifə tapılmadı</h1>
      <p className="mt-4 text-lg text-gray-500">
        Sizi {countdown} saniyəyə ana səhifəyə yönləndirəcəyik
      </p>
    </div>
  );
}
