import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 p-6 w-full">
        <span className="inline-block px-3 py-1 bg-white/90 text-[#FF5733] text-sm font-medium rounded-full mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/90 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>

      {project.status === "upcoming" && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#FF5733] text-white text-sm font-medium rounded-full">
          Upcoming
        </div>
      )}
    </Link>
  );
}
