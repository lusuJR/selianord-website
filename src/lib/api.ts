import { Project, Service, Blog } from "./types";

const API_URL = "http://localhost:5032/api";

async function fetchData<T>(endpoint: string): Promise<T[]> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  return fetchData<Project>("Project");
}

export async function getServices(): Promise<Service[]> {
  return fetchData<Service>("Service");
}

export async function getBlogs(): Promise<Blog[]> {
  return fetchData<Blog>("Blog");
}

export async function getBlogById(id: number) {
  const response = await fetch(`${API_URL}/Blog/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog");
  }

  return response.json();
}

export async function getProjectById(id: number) {
  const response = await fetch(`${API_URL}/Project/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  return response.json();
}