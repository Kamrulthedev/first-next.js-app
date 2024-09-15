import Footer from "@/app/components/Shaerd/Footer";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
