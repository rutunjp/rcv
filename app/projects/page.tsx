"use client";
import { useState } from "react";

import Head from "next/head";
import { projects, projectCategories } from "@/lib/data/projects";
import type { IProjectCategory } from "@/lib/content/projects";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    IProjectCategory | "all"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <Head>
        <title>Projects | Rotaract Club</title>
        <meta
          name="description"
          content="Explore our Rotaract club's service projects and initiatives"
        />
      </Head>

      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Service Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the various initiatives our Rotaract club has undertaken to
            make a positive impact in our community and around the world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === "all"
                ? "bg-[#FF5733] text-white"
                : "bg-gray-100"
            }`}
          >
            All
          </button>
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-[#FF5733] text-white"
                  : "bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No projects found in this category. Check back soon!
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
