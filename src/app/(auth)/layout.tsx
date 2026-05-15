import Logo from "@/../public/assets/images/logo.png";
import GraduationHat from "@/components/shared/GraduationHat";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 sm:px-16 md:px-24 py-12">
        <div className="absolute top-8 start-8">
          <Link
            href="/"
            className="text-xl font-bold text-primary flex items-center gap-1"
          >
            <Image src={Logo} width={102} height={32} alt="Logo" />
          </Link>
        </div>
        <main className="w-full max-w-md mx-auto">{children}</main>
      </div>
      <GraduationHat />
    </div>
  );
}
