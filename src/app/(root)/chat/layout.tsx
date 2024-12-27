import { Card } from "@/components/ui/card";
import LeftSection from "@/features/chat/left-section";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-4 flex flex-row gap-x-4">
      <LeftSection />
      <Card className="w-full">{children}</Card>
    </div>
  );
}
export default Layout;
