import React from "react";
import { MarketingNavbar } from "@/components/shared/MarketingNavbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col pt-28">
      <MarketingNavbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}