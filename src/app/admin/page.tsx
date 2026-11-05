import { Metadata } from "next";
import { getAllProjects, getAllLinks } from "@/lib/projects-service";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AccessDenied } from "@/components/admin/access-denied";
import { isAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Studio — Jeremías | Portfolio Management",
  description: "Panel de administración y gestión dinámica de proyectos y enlaces del portafolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export const instant = false;

export default async function AdminPage() {
  if (!(await isAdmin())) {
    return <AccessDenied />;
  }

  const projects = await getAllProjects();
  const links = await getAllLinks();

  return <AdminDashboard initialProjects={projects} initialLinks={links} />;
}
