import { getProjectBySlug } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import ProjectDetail from "@/app/project/page";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

// Optional: Generate static paths at build time
export async function generateStaticParams() {
  const projects = await import("@/lib/data/projects").then(
    (mod) => mod.projects
  );
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
} 