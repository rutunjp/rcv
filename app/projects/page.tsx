"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

// Sample project data - replace with your actual data
const projects = [
  {
    id: 1,
    title: "Subah ka nashta",
    category: "Community",
    description:
      "Partnering with global organizations to provide clean drinking water to communities in need. Our club members helped install water filtration systems in three villages and conducted educational workshops on water conservation.",
    date: "January 15, 2025",
    chairs: ["Maria Rodriguez", "James Chen"],
    images: [
      "/images/projects/water-project1.jpg",
      "/images/projects/water-project2.jpg",
      "/images/projects/water-project3.jpg",
    ],
  },
  {
    id: 2,
    title: "Cumble Donation",
    category: "Community",
    description:
      "Organized a city-wide food collection drive to support the local food bank. Club members collected over 500 pounds of non-perishable items and volunteered at the distribution center to help families in need.",
    date: "December 5, 2024",
    chairs: ["David Williams", "Sarah Johnson"],
    images: [
      "/images/projects/food-drive1.jpg",
      "/images/projects/food-drive2.jpg",
    ],
  },
  {
    id: 3,
    title: "Rotafair",
    category: "Community",
    description:
      "A four-part workshop series focusing on essential leadership skills for young professionals. Sessions included public speaking, conflict resolution, time management, and networking skills led by industry experts.",
    date: "November 10-24, 2024",
    chairs: ["Michael Lee", "Emma Thompson"],
    images: [
      "/images/projects/workshop1.jpg",
      "/images/projects/workshop2.jpg",
    ],
  },
  {
    id: 4,
    title: "Annual Fundraising Gala",
    category: "Club",
    description:
      "Our signature fundraising event bringing together Rotaract and Rotary members for an evening of celebration and fundraising. This year's gala raised over $15,000 to support our various service initiatives throughout the year.",
    date: "October 20, 2024",
    chairs: ["Jennifer Garcia", "Alex Patel"],
    images: [
      "/images/projects/gala1.jpg",
      "/images/projects/gala2.jpg",
      "/images/projects/gala3.jpg",
    ],
  },
  {
    id: 5,
    title: "Beach Cleanup Day",
    category: "Community",
    description:
      "Collaborated with local environmental groups to organize a beach cleanup event. Over 50 volunteers participated, collecting more than 200 pounds of trash and recyclables to protect our local marine ecosystem.",
    date: "September 18, 2024",
    chairs: ["Ryan Mitchell", "Sophia Wong"],
    images: ["/images/projects/beach1.jpg", "/images/projects/beach2.jpg"],
  },
  {
    id: 6,
    title: "Youth Mentorship Program",
    category: "Professional",
    description:
      "Launched a 6-month mentorship program pairing club members with local high school students interested in various career paths. The program included job shadowing, resume building, and college application assistance.",
    date: "August 1, 2024 - January 31, 2025",
    chairs: ["Daniel Cooper", "Olivia Martinez"],
    images: [
      "/images/projects/mentorship1.jpg",
      "/images/projects/mentorship2.jpg",
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "International",
    "Community",
    "Club",
    "Professional",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-gray-50 sm:px-16 min-h-screen">
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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                filter === category
                  ? "bg-[#FF5733] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image Carousel */}
              <div className="relative h-60 bg-gray-200">
                {project.images.length > 0 && (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover"
                    fill
                  />
                )}
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-[#FF5733] text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                {/* <p className="text-gray-600 mb-4">{project.description}</p> */}

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{project.date}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-500">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Project Chairs: {project.chairs.join(", ")}</span>
                  </div>
                </div>

                {/* View Gallery Button */}
                <button className="mt-6 w-full px-4 py-2 border border-[#FF7849] text-[#FF7849] rounded-lg hover:bg-[#FF7849] hover:text-white transition-colors duration-200 text-sm font-medium">
                  View Photo Gallery
                </button>
              </div>
            </div>
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
