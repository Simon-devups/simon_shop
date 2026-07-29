import Sidebar from "@/components/SideBar";
import Topbar from "@/components/TopBar.admin";
import "./global.css"
import "@/../public/css/dashboard.css"




export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <div className="admin-layout">
      <Sidebar />

      <div className="main">
        <Topbar/>
        <main className="page">
          {children}
        </main>
      </div>

      
    </div>
  );
}