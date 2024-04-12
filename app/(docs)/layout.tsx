import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className="root bg-center bg-cover bg-w-full"
      style={{ backgroundImage: "url(/assets/bluepurple14.jpg)" }}
    >
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-30" />
      <Sidebar />
      <MobileNav />

      <div className="root-container z-[10]">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
