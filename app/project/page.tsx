"use client";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Masonry } from "@/components/ui/masonry";

interface ProjectDetails {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  date: {
    start: string;
    end?: string;
  };
  chairs: {
    name: string;
    role?: string;
  }[];
  location: string;
  impact: {
    beneficiaries: number;
    description: string;
    metrics?: {
      label: string;
      value: string | number;
    }[];
  };
  partners?: {
    name: string;
    logo?: string;
    website?: string;
  }[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  nextProject?: {
    slug: string;
    title: string;
    category: string;
  };
  previousProject?: {
    slug: string;
    title: string;
    category: string;
  };
}
// Sample project data - replace with your actual data
// const project: Project = {
//   id: "1",
//   slug: "clean-water-initiative",
//   title: "Clean Water Initiative",
//   category: "International",
//   description:
//     "Partnering with global organizations to provide clean drinking water to communities in need. Our club members helped install water filtration systems in three villages and conducted educational workshops on water conservation.",
//   fullDescription:
//     "Access to clean water is a fundamental human right, yet millions around the world still lack this basic necessity. Our Rotaract club partnered with Water for All International to make a difference in communities facing severe water shortages.\n\nOver a period of six months, our members raised funds, coordinated logistics, and traveled to implement sustainable water solutions. The project had three main components:\n\n1. Installation of water filtration systems in three rural villages, providing clean drinking water to over 2,000 people\n\n2. Educational workshops on water conservation and sanitation practices, empowering locals with knowledge to maintain their new systems\n\n3. Distribution of personal water filters to families in remote areas beyond the reach of centralized systems\n\nThe impact of this initiative extends beyond immediate access to clean water. With reduced waterborne illnesses, children can attend school more regularly, and adults can focus on work and community development. We've established a maintenance fund and training program to ensure the sustainability of these systems for years to come.",
//   date: "January 15-30, 2025",
//   chairs: ["Maria Rodriguez", "James Chen"],
//   location: "Nariokotome, Kenya",
//   impact:
//     "Provided clean water access to over 2,000 people across three villages",
//   partners: [
//     "Water for All International",
//     "Local Rotary Club",
//     "Kenyan Ministry of Water",
//   ],
//   images: [
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/donbosco.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//     "/images/projects/hero.jpg",
//   ],
//   nextProject: {
//     slug: "local-food-drive",
//     title: "Local Food Drive",
//     category: "Community",
//   },
//   previousProject: {
//     slug: "youth-mentorship-program",
//     title: "Youth Mentorship Program",
//     category: "Professional",
//   },
// };

interface ProjectDetailProps {
  project: ProjectDetails;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Transform project images to the required format
  const masonryImages = project.images.map((image) => ({
    src: image.src,
    alt: image.alt || project.title,
  }));

  return (
    <div className="pt-20 bg-white">
      <Head>
        <title>{project.title} | Rotaract Club Projects</title>
        <meta name="description" content={project.description} />
      </Head>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project navigation breadcrumb */}
        <div className="py-4">
          <nav className="flex items-center text-sm">
            <Link
              href="/projects"
              className="text-gray-500 hover:text-gray-700"
            >
              Projects
            </Link>
            <svg
              className="h-4 w-4 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </nav>
        </div>

        {/* Project Title */}
        <div className="mb-8 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-[#FF5733] bg-opacity-10 text-[#FF5733] text-sm font-medium rounded-full mb-3">
            {project.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {project.title}
          </h1>
        </div>

        {/* Main content: Masonry gallery + Sticky description */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Masonry Photo Gallery - Left Column */}
          <div className="lg:w-3/5">
            <Masonry
              images={masonryImages}
              columns={2}
              scrollbar={true}
              className="h-[calc(100vh-200px)]"
              onImageClick={(image) => setSelectedImage(image.src)}
            />
          </div>

          {/* Project Details - Right Column (Sticky) */}
          <div className="lg:w-2/5">
            <div className="sticky top-20">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-sm">
                  <div>
                    <h3 className="text-gray-500 font-medium mb-1">Date</h3>
                    <p className="text-gray-900">
                      {project.date.start}
                      {project.date.end && ` - ${project.date.end}`}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-medium mb-1">Location</h3>
                    <p className="text-gray-900">{project.location}</p>
                  </div>
                  <div>
                    <h3 className="text-gray-500 font-medium mb-1">
                      Project Chairs
                    </h3>
                    <p className="text-gray-900">
                      {project.chairs
                        .map(
                          (chair) =>
                            `${chair.name}${
                              chair.role ? ` (${chair.role})` : ""
                            }`
                        )
                        .join(", ")}
                    </p>
                  </div>
                  {/* <div>
                    <h3 className="text-gray-500 font-medium mb-1">Impact</h3>
                    <p className="text-gray-900">
                      {project.impact.description}
                    </p>
                    {project.impact.metrics && (
                      <div className="mt-2 space-y-1">
                        {project.impact.metrics.map((metric, index) => (
                          <div key={index} className="text-sm">
                            <span className="text-gray-500">
                              {metric.label}:
                            </span>{" "}
                            <span className="font-medium">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div> */}
                </div>

                {project.partners && (
                  <div className="mt-6">
                    <h3 className="text-gray-500 font-medium mb-1 text-sm">
                      Partners
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.partners?.map((partner, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                        >
                          {partner.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Navigation */}
              <div className="flex justify-between items-center mt-6">
                {project.previousProject && (
                  <Link
                    href={`/projects/${project.previousProject.slug}`}
                    className="flex items-center text-gray-600 hover:text-[#FF5733]"
                  >
                    <svg
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span>Previous Project</span>
                  </Link>
                )}

                {project.nextProject && (
                  <Link
                    href={`/projects/${project.nextProject.slug}`}
                    className="flex items-center text-gray-600 hover:text-[#FF5733]"
                  >
                    <span>Next Project</span>
                    <svg
                      className="h-5 w-5 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="Enlarged project photo"
              width={1920}
              height={1080}
              className="w-full h-auto max-h-[80vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
