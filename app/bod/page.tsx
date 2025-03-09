"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
interface BoardMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  email: string;
  linkedin: string;
  intro: string;
}

// Sample board members data - replace with your actual team data
const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "President",
    photo: "/images/team/emily.jpg",
    email: "emily.rodriguez@rotaract.org",
    linkedin: "https://linkedin.com/in/emilyrodriguez",
    intro:
      "Emily is a passionate community advocate with 5 years of Rotaract experience. She's currently pursuing her Master's in Public Administration and hopes to build stronger connections between our club and the community it serves. Her vision for this year is to expand our international service initiatives while strengthening local partnerships.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vice President",
    photo: "/images/team/michael.jpg",
    email: "michael.chen@rotaract.org",
    linkedin: "https://linkedin.com/in/michaelchen",
    intro:
      "Michael brings his background in business development to help grow our club's impact. He joined Rotaract three years ago and has led several successful fundraising campaigns. Michael is dedicated to creating professional development opportunities for all members and enhancing our club's operational excellence.",
  },
  {
    id: 3,
    name: "Sophia Patel",
    role: "Secretary",
    photo: "/images/team/sophia.jpg",
    email: "sophia.patel@rotaract.org",
    linkedin: "https://linkedin.com/in/sophiapatel",
    intro:
      "Sophia ensures our club runs smoothly with her exceptional organizational skills. A founding member of our chapter, she maintains our records, communications, and meeting minutes with precision. Her background in communications helps us maintain transparent and effective club operations.",
  },
  {
    id: 4,
    name: "James Washington",
    role: "Treasurer",
    photo: "/images/team/james.jpg",
    email: "james.washington@rotaract.org",
    linkedin: "https://linkedin.com/in/jameswashington",
    intro:
      "James manages our club finances with expertise from his career in accounting. He oversees our budget, fundraising accounts, and ensures we maximize our resources for service projects. James is passionate about financial transparency and sustainable project funding.",
  },
  {
    id: 5,
    name: "Olivia Kim",
    role: "International Service Director",
    photo: "/images/team/olivia.jpg",
    email: "olivia.kim@rotaract.org",
    linkedin: "https://linkedin.com/in/oliviakim",
    intro:
      "Olivia coordinates our global service initiatives and international partnerships. Having lived in four countries, she brings a global perspective to our projects. She's currently working on expanding our clean water initiative and developing a new educational support program in partnership with clubs in Southeast Asia.",
  },
  {
    id: 6,
    name: "David Okafor",
    role: "Community Service Director",
    photo: "/images/team/david.jpg",
    email: "david.okafor@rotaract.org",
    linkedin: "https://linkedin.com/in/davidokafor",
    intro:
      "David leads our local service projects with a focus on addressing urgent community needs. His background in social work helps us create meaningful, sustainable impact. This year, he's focused on expanding our youth mentorship program and launching a new initiative to support homeless individuals in our area.",
  },
  {
    id: 7,
    name: "Aisha Mahmoud",
    role: "Professional Development Chair",
    photo: "/images/team/aisha.jpg",
    email: "aisha.mahmoud@rotaract.org",
    linkedin: "https://linkedin.com/in/aishamahmoud",
    intro:
      "Aisha organizes workshops, speaker series, and networking events to help members grow professionally. With her experience in career counseling, she creates valuable opportunities for skill development. She's currently developing a mentorship program connecting club members with experienced professionals in various fields.",
  },
  {
    id: 8,
    name: "Daniel Garcia",
    role: "Club Service Director",
    photo: "/images/team/daniel.jpg",
    email: "daniel.garcia@rotaract.org",
    linkedin: "https://linkedin.com/in/danielgarcia",
    intro:
      "Daniel focuses on strengthening our internal club culture and member engagement. He coordinates social events, recognition programs, and ensures new members feel welcome. His goal is to foster a vibrant club atmosphere that balances service work with friendship and fun.",
  },
  {
    id: 9,
    name: "Priya Sharmaa",
    role: "Public Relations Officer",
    photo: "/images/team/priya.jpg",
    email: "priya.sharma@rotaract.org",
    linkedin: "https://linkedin.com/in/priyasharma",
    intro:
      "Priya manages our club's public image, social media presence, and communications strategy. With her background in marketing, she showcases our impact to the wider community. She's working on a new website and digital storytelling campaign to highlight our members and projects.",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(
    null
  );

  const openDialog = (member: BoardMember) => {
    setSelectedMember(member);
  };

  const closeDialog = () => {
    setSelectedMember(null);
  };

  return (
    <div className="   ">
      <Head>
        <title>Our Team | Rotaract Club</title>
        <meta
          name="description"
          content="Meet the dedicated board members of our Rotaract club"
        />
      </Head>

      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Board of Directors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our Rotaract club&lsquo;s
            mission and activities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => openDialog(member)}
            >
              <div className="relative h-72 bg-gray-200">
                <Image
                  src={member.photo}
                  alt={member.name}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FF5733] font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Member Info Dialog */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeDialog}
          >
            <div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Member Photo - Left side */}
                <div className="md:w-2/5 h-80 md:h-auto relative bg-gray-100">
                  <Image
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="object-cover"
                    fill
                  />
                </div>

                {/* Member Info - Right side */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {selectedMember.name}
                      </h2>
                      <p className="text-[#FF5733] font-medium text-lg">
                        {selectedMember.role}
                      </p>
                    </div>
                    <button
                      onClick={closeDialog}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="h-6 w-6"
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
                  </div>

                  <div className="prose max-w-none mb-6">
                    <p>{selectedMember.intro}</p>
                  </div>

                  <div className="space-y-3 mt-6">
                    {/* Contact Info */}
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href={`mailto:${selectedMember.email}`}
                        className="hover:text-[#FF5733]"
                      >
                        {selectedMember.email}
                      </a>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#FF5733]"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={closeDialog}
                      className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
