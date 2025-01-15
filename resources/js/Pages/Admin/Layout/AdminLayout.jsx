// components/layouts/AdminLayout.jsx
import React from "react";
import Sidebar from "@/Components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
