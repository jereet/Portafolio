"use server";

import { revalidatePath } from "next/cache";
import { 
  saveProject, 
  deleteProject, 
  saveLink, 
  deleteLink, 
} from "@/lib/projects-service";
import { Project, SocialLink } from "@/types";
import { isAdmin } from "@/lib/admin-auth";

export async function adminSaveProject(projectData: Omit<Project, "id"> & { id?: string }) {
  if (!(await isAdmin())) {
    return { success: false, error: "No autorizado. Clave de admin inválida." };
  }

  try {
    const saved = await saveProject(projectData);
    revalidatePath("/");
    revalidatePath("/projects");
    revalidatePath(`/projects/${saved.slug}`);
    revalidatePath("/admin");
    return { success: true, project: saved };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function adminDeleteProject(id: string) {
  if (!(await isAdmin())) {
    return { success: false, error: "No autorizado." };
  }

  try {
    const ok = await deleteProject(id);
    revalidatePath("/");
    revalidatePath("/projects");
    revalidatePath("/admin");
    return { success: ok };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function adminSaveLink(linkData: Omit<SocialLink, "id"> & { id?: string }) {
  if (!(await isAdmin())) {
    return { success: false, error: "No autorizado." };
  }

  try {
    const saved = await saveLink(linkData);
    revalidatePath("/");
    revalidatePath("/about");
    revalidatePath("/contact");
    revalidatePath("/admin");
    return { success: true, link: saved };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}

export async function adminDeleteLink(id: string) {
  if (!(await isAdmin())) {
    return { success: false, error: "No autorizado." };
  }

  try {
    const ok = await deleteLink(id);
    revalidatePath("/");
    revalidatePath("/contact");
    revalidatePath("/admin");
    return { success: ok };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
