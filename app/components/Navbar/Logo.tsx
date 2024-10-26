"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      height="60"
      width="60"
      src="/images/main_Logo.png"
    />
  );
};
