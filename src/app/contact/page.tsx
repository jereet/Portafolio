import { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { getAllLinks } from "@/lib/projects-service";

export const metadata: Metadata = {
  title: "Contacto — Jeremías | Full Stack Engineer",
  description: "Formulario de contacto y enlaces directos a GitHub, LinkedIn y descarga de CV.",
};

export default async function ContactPage() {
  const links = await getAllLinks();

  return (
    <div className="min-h-screen pt-12">
      <ContactSection links={links} />
    </div>
  );
}
