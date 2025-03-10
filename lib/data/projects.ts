import { IProject, IProjectCategory } from '../content/projects';

export const projectCategories: IProjectCategory[] = [
  "Community Service",
  "International",
  "Professional Development",
  "Club Service",
];
export const projects: IProject[] = [
  {
    id: "1",
    slug: "clean-green-drive",
    title: "Clean & Green Drive",
    category: "Community Service",
    description: "A tree plantation and cleanliness drive to promote environmental sustainability.",
    fullDescription:
      "In collaboration with the municipal corporation, we organized a city-wide cleanup drive along with tree plantations in public parks. Volunteers participated in waste segregation and awareness sessions on waste management.In collaboration with the municipal corporation, we organized a city-wide cleanup drive along with tree plantations in public parks. Volunteers participated in waste segregation and awareness sessions on waste management.",
    date: {
      start: "2025-02-10",
      end: "2025-02-10",
    },
    chairs: [
      { name: "Rahul Sharma", role: "Project Lead" },
      { name: "Priya Mehta", role: "Coordinator" },
    ],
    location: "Vadodara Public Park",
    impact: {
      beneficiaries: 500,
      description: "Increased awareness about cleanliness and environment conservation.",
      metrics: [
        { label: "Trees Planted", value: 150 },
        { label: "Volunteers Involved", value: 80 },
      ],
    },
    partners: [
      { name: "Green Earth Foundation", logo: "/logos/green-earth.png", website: "https://greenearth.org" },
    ],
    images: [
      { src: "/images/projects/hero.jpg", alt: "Volunteers planting trees", caption: "Tree plantation at the park" },
      { src: "/images/projects/donbosco.jpg", alt: "Group of volunteers cleaning up waste" },
    ],
    featured: true,
    status: "completed",
    tags: ["Environment", "Cleanliness", "Community"],

  },
  {
    id: "2",
    slug: "ai-for-all-webinar",
    title: "AI for All - Awareness Webinar",
    category: "Professional Development",
    description: "An online webinar to introduce AI concepts and practical applications for all backgrounds.",
    fullDescription:
      "AI for All is an initiative to educate students and professionals about AI tools, prompting techniques, and how AI can be integrated into daily work. This interactive session included live demos and a Q&A round with industry experts.",
    date: {
      start: "2025-03-15",
    },
    chairs: [
      { name: "Ananya Patel", role: "Project Lead" },
      { name: "Vivek Rao", role: "Technical Coordinator" },
    ],
    location: "Zoom Webinar",
    impact: {
      beneficiaries: 300,
      description: "Introduced AI concepts to a diverse audience, helping them understand its potential.",
      metrics: [
        { label: "Attendees", value: 300 },
        { label: "Industry Experts", value: 3 },
      ],
    },
    partners: [
      { name: "AI Innovators", logo: "/logos/ai-innovators.png", website: "https://aiinnovators.com" },
    ],
    images: [
      { src: "/images/projects/hero.jpg", alt: "Speaker presenting AI concepts", caption: "Live webinar session" },
    ],
    featured: true,
    status: "upcoming",
    tags: ["AI", "Webinar", "Technology"],
  },
  {
    id: "3",
    slug: "youth-leadership-summit",
    title: "Youth Leadership Summit",
    category: "Club Service",
    description: "An event aimed at fostering leadership and communication skills among young individuals.",
    fullDescription:
      "The Youth Leadership Summit brought together students, young professionals, and mentors to discuss leadership challenges and strategies. The event featured keynote speeches, panel discussions, and networking opportunities.",
    date: {
      start: "2025-01-20",
      end: "2025-01-21",
    },
    chairs: [
      { name: "Karan Desai", role: "Event Director" },
      { name: "Simran Kaur", role: "Logistics Head" },
    ],
    location: "Vadodara Convention Center",
    impact: {
      beneficiaries: 200,
      description: "Empowered young leaders with essential communication and leadership skills.",
      metrics: [
        { label: "Speakers", value: 10 },
        { label: "Sessions Conducted", value: 5 },
      ],
    },
    partners: [
      { name: "Leadership Academy", logo: "/logos/leadership-academy.png", website: "https://leadershipacademy.org" },
    ],
    images: [
      { src: "/images/projects/hero.jpg", alt: "Panel discussion on leadership", caption: "Panelists discussing leadership strategies" },
      { src: "/images/projects/donbosco.jpg", alt: "Audience at the summit" },
    ],
    featured: false,
    status: "completed",
    tags: ["Leadership", "Youth", "Development"],
  },
];

export default projects;


export function getProjectBySlug(slug: string): IProject | undefined {
  return projects.find(project => project.slug === slug);
}

export function getRelatedProjects(currentProject: IProject, limit = 3): IProject[] {
  return projects
    .filter(p => p.id !== currentProject.id && p.category === currentProject.category)
    .slice(0, limit);
}

export function getProjectsByCategory(category: IProjectCategory): IProject[] {
  return projects.filter(project => project.category === category);
}

export function getFeaturedProjects(limit = 6): IProject[] {
  return projects
    .filter(project => project.featured)
    .slice(0, limit);
} 