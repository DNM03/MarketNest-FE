import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import LeftSection from "@/features/setting/left-section";
import React from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="p-4 flex flex-row gap-x-4">
        <LeftSection />
        <Card className="w-full p-8">{children}</Card>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
