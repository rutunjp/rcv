"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Masonry } from "@/components/ui/masonry";
import type { IProject } from "@/lib/content/projects";

interface IProjectDetailProps {
  project: IProject;
}

export function ProjectDetail({ project }: IProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Transform project images to the required format for Masonry
  const masonryImages = project.images.map((image) => ({
    src: image.src,
    alt: image.alt || project.title,
  }));

  return (
    <div className="bg-white">
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
            <div className="sticky top-24">
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
                  <div>
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
                  </div>
                </div>

                {project.partners && (
                  <div className="mt-6">
                    <h3 className="text-gray-500 font-medium mb-1 text-sm">
                      Partners
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, index) => (
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
