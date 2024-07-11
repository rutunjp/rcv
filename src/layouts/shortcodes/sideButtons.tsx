import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

function SideButtons() {
  return (
    <>
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <a
              target="_blank"
              key={social.id}
              title={social.title}
              href={social.link}
              className="scale-110 rounded link-outline text-black hover:text-[#d41367] transition-200"
            >
              <social.icon className="text-2xl" />
            </a>
          ))}
        </div>
        <div className="w-48 h-1 bg-black dark:bg-bglight rotate-90 "></div>
      </div>
    </>
  );
}

const socialLinks = [
  {
    id: 1,
    title: "Instagram Profile",
    link: "https://www.instagram.com/rotaract_vadodara",
    icon: IoLogoInstagram,
  },
  {
    id: 2,
    title: "LinkedIn Profile",
    link: "https://www.linkedin.com/company/rotaract-vadodara/",
    icon: IoLogoLinkedin,
  },
  {
    id: 3,
    title: "Facebook Profile",
    link: "https://www.facebook.com/RotaractClubofVadodara/",
    icon: IoLogoFacebook,
  },
];

export default SideButtons;
