"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { BoardMember } from "@/lib/data";
import { boardMembers } from "@/lib/data";
// Sample board members data - replace with your actual team 

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white  rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => openDialog(member)}
            >
              <div className="relative h-72 bg-gray-200">
                <Image
                  src={member.photo}
                  alt={member.name}
                  quality={80}
                  className="object-cover object-top"
                  fill
                />
              </div>
              <div className="p-2 py-2 text-center">
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
                    className="object-cover object-top"
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
