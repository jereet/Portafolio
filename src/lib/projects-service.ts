import fs from "fs";
import path from "path";
import { Project, SocialLink } from "@/types";

const DATA_PATH = path.join(process.cwd(), "src", "data", "projects-data.json");

interface DataStore {
  projects: Project[];
  links: SocialLink[];
}

function readData(): DataStore {
  try {
    if (!fs.existsSync(DATA_PATH)) {
      return { projects: [], links: [] };
    }
    const content = fs.readFileSync(DATA_PATH, "utf-8");
    return JSON.parse(content) as DataStore;
  } catch (error) {
    console.error("Error reading projects-data.json:", error);
    return { projects: [], links: [] };
  }
}

function writeData(data: DataStore): void {
  try {
    const dir = path.dirname(DATA_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing projects-data.json:", error);
    throw new Error("No se pudo guardar la información de proyectos.");
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const data = readData();
  return [...data.projects].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((p) => p.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getAllProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export async function getAllLinks(): Promise<SocialLink[]> {
  const data = readData();
  return data.links || [];
}

export async function saveProject(project: Omit<Project, "id"> & { id?: string }): Promise<Project> {
  const data = readData();
  const id = project.id || `proj-${Date.now()}`;
  const slug =
    project.slug ||
    project.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const fullProject: Project = {
    ...project,
    id,
    slug,
    order: project.order ?? data.projects.length + 1
  };

  const existingIndex = data.projects.findIndex((p) => p.id === id || p.slug === slug);
  if (existingIndex >= 0) {
    data.projects[existingIndex] = fullProject;
  } else {
    data.projects.push(fullProject);
  }

  writeData(data);
  return fullProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  const data = readData();
  const initialLength = data.projects.length;
  data.projects = data.projects.filter((p) => p.id !== id);
  if (data.projects.length !== initialLength) {
    writeData(data);
    return true;
  }
  return false;
}

export async function saveLink(link: Omit<SocialLink, "id"> & { id?: string }): Promise<SocialLink> {
  const data = readData();
  const id = link.id || `link-${Date.now()}`;
  const fullLink: SocialLink = {
    ...link,
    id
  };

  const existingIndex = data.links.findIndex((l) => l.id === id);
  if (existingIndex >= 0) {
    data.links[existingIndex] = fullLink;
  } else {
    data.links.push(fullLink);
  }

  writeData(data);
  return fullLink;
}

export async function deleteLink(id: string): Promise<boolean> {
  const data = readData();
  const initialLength = data.links.length;
  data.links = data.links.filter((l) => l.id !== id);
  if (data.links.length !== initialLength) {
    writeData(data);
    return true;
  }
  return false;
}
