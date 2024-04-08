import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="auth bg-center bg-cover"
      style={{ backgroundImage: "url(/assets/bluepurple12.jpg)" }}
    >
      {children}
    </main>
  );
};

export default Layout;
