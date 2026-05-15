import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: Build Dashboard Sidebar & Navbar later */}
      {children}
    </div>
  );
}
