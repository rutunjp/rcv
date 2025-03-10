export type ProjectCategory =
  | "Community Service"
  | "International"
  | "Professional Development"
  | "Club Service"

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
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
  featured?: boolean;
  status: "upcoming" | "ongoing" | "completed";
  tags?: string[];
} 