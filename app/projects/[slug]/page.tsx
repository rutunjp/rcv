import { getProjectBySlug } from "@/lib/data/projects";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import { ProjectDetail } from "@/components/project-detail";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rotaract Club Projects`,
    description: project.description,
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
