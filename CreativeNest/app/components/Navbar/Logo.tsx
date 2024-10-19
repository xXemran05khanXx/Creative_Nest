"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      height="100"
      width="100"
      src="/images/main_Logo.png"
    />
  );
};
