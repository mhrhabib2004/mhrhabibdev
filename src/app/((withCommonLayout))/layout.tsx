import Footer from "@/components/modules/shared/Footer";
import Navbar from "@/components/modules/shared/Navber";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen pt-[64px] md:pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
