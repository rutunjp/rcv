import { boardMembers, type BoardMember } from "@/lib/data";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type ISkill = string;

function getMember(memberSlug: string): BoardMember | undefined {
  return boardMembers.find((member) => member.slug === memberSlug);
}

interface IAchievement {
  id: number;
  title: string;
  date?: string; // Optional, in case you want to add dates later
  description?: string; // Optional, for any additional details
}

export async function generateMetadata({
  params,
}: {
  params: { memberSlug: string };
}): Promise<Metadata> {
  const member = getMember(params?.memberSlug);
  return {
    title: member?.name || "Member not found",
  };
}

export default function MemberPage({
  params,
}: {
  params: { memberSlug: string };
}) {
  const member = getMember(params.memberSlug); // Directly use params
  if (!member) return <div>Member not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{member.name} | Rotaract Board Member</title>
        <meta
          name="description"
          content={`${member.name}, ${
            member.role
          } at Rotaract Club - ${member.intro.substring(0, 100)}...`}
        />
      </Head>

      {/* Banner with branding */}
      <div className="h-16 bg-white shadow-sm flex items-center justify-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logos/rcvLogo.png"
              alt="Rotaract Club"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-500">Board Member Profile</p>
        </div>
      </div>

      <main className="container mx-auto py-8 px-4 max-w-3xl">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div
            className="h-24 w-full"
            style={{ backgroundColor: "#FF5733" }}
          ></div>

          <div className="px-6 pt-0 pb-6 relative">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="-mt-16 mb-4 sm:mb-0 sm:mr-6">
                <div className="rounded-full border-4 border-white overflow-hidden h-32 w-32 relative shadow-sm">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    className="object-cover"
                    fill
                  />
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h1>
                <p className="text-lg font-medium" style={{ color: "#FF5733" }}>
                  {member.role}
                </p>
                <p className="text-gray-600 mt-1">{member.background}</p>
              </div>
            </div>

            {/* Quote */}
            {member.quote && (
              <div
                className="mt-6 italic text-gray-600 border-l-4 pl-4 py-1"
                style={{ borderColor: "#FF5733" }}
              >
                `&quot;`{member.quote}`&quot;`
              </div>
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700">{member.intro}</p>

            {member.education && (
              <div className="mt-4">
                <h3 className="font-medium text-gray-900">Education</h3>
                <p className="text-gray-700">{member.education}</p>
              </div>
            )}
          </div>
        </div>

        {/* Achievements Section */}
        {Array.isArray(member.achievements) &&
          member.achievements.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Achievements at Rotaract
                </h2>
                <ul className="space-y-2">
                  {member.achievements.map((achievement: IAchievement) => (
                    <li key={achievement.id} className="flex items-start">
                      <div
                        className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mt-1"
                        style={{
                          backgroundColor: "#FF5733",
                        }}
                      >
                        <svg
                          className="h-3 w-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">
                        {achievement.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        {/* Skills Section */}
        {member.skills && member.skills.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill: ISkill, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${"#FF5733"}20`,
                      color: "#FF5733",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Connect Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Connect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <Link
                href={`mailto:${member.email}`}
                className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
              >
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: `${"#FF5733"}20`,
                  }}
                >
                  <svg
                    className="h-5 w-5"
                    style={{ color: "#FF5733" }}
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
                </div>
                <div className="overflow-hidden">
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-600 truncate">{member.email}</p>
                </div>
              </Link>

              {/* LinkedIn */}
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${"#FF5733"}20`,
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      style={{ color: "#FF5733" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">LinkedIn</p>
                    <p className="text-gray-600">Connect on LinkedIn</p>
                  </div>
                </Link>
              )}

              {/* Instagram */}
              {member.instagram && (
                <Link
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${"#FF5733"}20`,
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      style={{ color: "#FF5733" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Instagram</p>
                    <p className="text-gray-600">Follow on Instagram</p>
                  </div>
                </Link>
              )}

              {/* Twitter */}
              {member.twitter && (
                <Link
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${"#FF5733"}20`,
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      style={{ color: "#FF5733" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Twitter</p>
                    <p className="text-gray-600">Follow on Twitter</p>
                  </div>
                </Link>
              )}

              {/* Portfolio/Website */}
              {member.portfolio && (
                <Link
                  href={member.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-sm transition-shadow"
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: `${"#FF5733"}20`,
                    }}
                  >
                    <svg
                      className="h-5 w-5"
                      style={{ color: "#FF5733" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Portfolio</p>
                    <p className="text-gray-600">Visit Website</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Board Member at Rotaract Club | {new Date().getFullYear()}</p>
          <p className="mt-1">
            <Link href="/team" className="text-[#FF5733] hover:underline">
              View All Board Members
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
