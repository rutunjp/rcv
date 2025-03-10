import { ReactNode } from 'react';

export interface BoardMember {
    portfolio?: string;
    instagram?: string;
    twitter?: string;
    skills?: string[];
    achievements?: boolean;
    education?: ReactNode | string;
    quote?: string;
    background?: ReactNode;
    slug: string;
    id: number;
    name: string;
    role: string;
    photo: string;
    email: string;
    linkedin: string;
    intro: string;
}
export const boardMembers: BoardMember[] = [
    {
        slug: "dhawal-panchal",
        id: 1,
        name: "Dhawal Panchal",
        role: "President",
        photo: "/images/bod/dhawal.jpg",
        email: "dhawal-panchal@gmail.com",
        linkedin: "",
        intro:
            "Meet @panchaldhawal : The Harvey Specter of Our Rotaract Club! 👔🔹\n\nWhen it comes to leadership, our President Dhawal is the real- life Harvey Specter – charming, strategic, and always ready to close the deal! 🚀 Just like Harvey, Dhawal knows how to make things happen and brings a whole lot of swagger to our Rotaract family.From community projects to leadership workshops, he's the ace in our deck, ensuring everything runs as smoothly as one of Harvey's famous deals. 😎⚖️\n\nWelcome aboard the Dhawal Express – where excellence meets enthusiasm, and every challenge is just another opportunity to shine!.",


    },

    {
        slug: "aditya-purohit",
        id: 2,
        name: "Aditya Purohit",
        role: "Secretary",
        photo: "/images/bod/aditya.jpg",
        email: "aditya-purohit@gmail.com",
        linkedin: "",
        intro:
            "Sophia ensures our club runs smoothly with her exceptional organizational skills. A founding member of our chapter, she maintains our records, communications, and meeting minutes with precision. Her background in communications helps us maintain transparent and effective club operations.",
    },
    {
        slug: "tirth-bhatt",
        id: 3,
        name: "Tirth Bhatt",
        role: "Vice President",
        photo: "/images/bod/tirth.jpg",
        email: "tirth-bhatt@gmail.com",
        linkedin: "",
        intro:
            "Michael brings his background in business development to help grow our club's impact. He joined Rotaract three years ago and has led several successful fundraising campaigns. Michael is dedicated to creating professional development opportunities for all members and enhancing our club's operational excellence.",
    },
    {
        slug: "hardik-aswani",
        id: 4,
        name: "Hardik Aswani",
        role: "Treasurer",
        photo: "/images/bod/hardik.jpg",
        email: "hardik-aswani@gmail.com",
        linkedin: "",
        intro:
            "Meet @theurbanalpha , our very own Dwight Schrute of finances. Treasurer of Rotaract, ensuring our budget is always 'Bears, Beets, and Balance Sheets.",
    },
    {
        slug: "rudra-upadhyay",
        id: 5,
        name: "Rudra Upadhyay",
        role: "International Service Director",
        photo: "/images/bod/rudra.jpg",
        email: "rudra-upadhyay@gmail.com",
        linkedin: "",
        intro:
            "Our Pam Beesly of Service Projects. As Chair, she keeps everything running smoothly and always brings a touch of creativity to Rotaract.",
    },
    {
        slug: "purva-bhatt",
        id: 6,
        name: "Purva Bhatt",
        role: "Community Service Director",
        photo: "/images/bod/purva.jpg",
        email: "purva-bhatt@gmail.com",
        linkedin: "",
        intro:
            "Our Pam Beesly of Service Projects. As Chair, she keeps everything running smoothly and always brings a touch of creativity to Rotaract.",
    },
    {
        slug: "dipen-shah",
        id: 7,
        name: "Dipen Shah",
        role: "Professional Development Chair",
        photo: "/images/bod/dipen.jpg",
        email: "dipen-shah@gmail.com",
        linkedin: "",
        intro:
            "The 'Jim Halpert' of professional development - witty, wise, and always helping you level up your career game!",
    },
    {
        slug: "saloni-bokadiya",
        id: 8,
        name: "Saloni Bokadiya",
        role: "Club Service Director",
        photo: "/images/bod/saloni.jpg",
        email: "saloni-bokadiya@gmail.com",
        linkedin: "",
        intro:
            "Spotted: @saloni1703 , our Club Service Chair, ensuring every Rotaract event is unforgettable. You know you love her. XOXO, Gossip Girl.",
    },
    {
        slug: "twisha-kothari",
        id: 10,
        name: "Twisha M. Kothari",
        role: "Social Media Head",
        photo: "/images/bod/twisha.jpg",
        email: "twisha-kothari@gmail.com",
        linkedin: "",
        intro:
            "Twisshaaa, your one and only source into the fabulous lives of @rotaract_vadodara. As the club editor, she will be spilling all the latest tea on our social media",
    },
    {
        slug: "neel-goplani",
        id: 11,
        name: "Neel Goplani",
        role: "World Rotaract Week Chair",
        photo: "/images/bod/neel.jpg",
        email: "neel-goplani@gmail.com",
        linkedin: "",
        intro:
            "Our very own Cosmo Kramer of World Rotaract Week! Bringing boundless enthusiasm and unforgettable moments to celebrate Rotaract globally.",
    },
    {
        slug: "keertika-dhingra",
        id: 12,
        name: "Keertika Dhingra",
        role: "ROTASIA Chair",
        photo: "/images/bod/keertika.jpg",
        email: "keertika-dhingra@gmail.com",
        linkedin: "",
        intro:
            "our Monica Geller as Rotasia Club Ambassador! Bringing organization, enthusiasm, and a dash of humor to every Rotaract event. Could she BE any more perfect for the role?",
    },
    {
        slug: "rutunj-parikh",
        id: 13,
        name: "Rutunj Parikh",
        role: "Public Image Chair",
        photo: "/images/bod/rutunj.jpg",
        email: "rutunj-parikh@gmail.com",
        linkedin: "",
        intro:
            "Our Joey Tribbiani of Public Image. How you doin'? He's making sure Rotaract's image is always in the spotlight!",
    },
    {
        slug: "vivek-sarvaiya",
        id: 13,
        name: "Vivek Sarvaiya",
        role: "Immediate Past President",
        photo: "/images/bod/vivek.jpg",
        email: "vivek-sarvaiya@gmail.com",
        linkedin: "",
        intro:
            "Priya manages our club's public image, social media presence, and communications strategy. With her background in marketing, she showcases our impact to the wider community. She's working on a new website and digital storytelling campaign to highlight our members and projects.",
    },
    {
        slug: "jignesh-padhya",
        id: 14,
        name: "Jignesh Padhya",
        role: "Special Aide",
        photo: "/images/bod/jignesh.jpg",
        email: "jignesh-padhya@gmail.com",
        linkedin: "",
        intro:
            "Our Jerry Seinfeld of Rotaract Learning Facilitator! Master of wit and wisdom, making every session a laugh-filled learning experience. ",
    },
    {
        slug: "jeni-sheth",
        id: 15,
        name: "Jeni Sheth",
        role: "Seargant at arms",
        photo: "/images/bod/jeni.jpg",
        email: "jeni-sheth@gmail.com",
        linkedin: "",
        intro:
            "Our Sergeant at Arms straight out of Seinfeld! Keeping order with a touch of humor and ensuring smooth operations in Rotaract. ",
    },
    {
        slug: "anjali-shah",
        id: 16,
        name: "Anjali Shah",
        role: "Environment Chair",
        photo: "/images/bod/anjali.jpg",
        email: "anjali-shah@gmail.com",
        linkedin: "",
        intro:
            "Our Galadriel of Environmental Conservation in Rotaract! Leading with wisdom and grace to preserve our world for future generations. 🌍💚",
    },
    {
        slug: "richa-surawala",
        id: 15,
        name: "Richa Suryawala",
        role: "Membership Chair",
        photo: "/images/bod/richa.jpg",
        email: "richa-surawala@gmail.com",
        linkedin: "",
        intro:
            "Our Richa Suryawala of Membership Chair! Bringing enthusiasm and a dash of humor to every Rotaract event. Could she BE any more perfect for the role?",
    },
    {
        slug: "meet-gandhi",
        id: 17,
        name: "Meet Gandhi",
        role: "Sports Chair",
        photo: "/images/bod/meetG.jpg",
        email: "meet-gandhi@gmail.com",
        linkedin: "",
        intro:
            "Meet @meetgandhi88 , our Michael Scott of Sports Chairmanship! Leading with enthusiasm and a dash of humor, he ensures every Rotaract sports event is a slam dunk.",
    },
    {
        slug: "meet-shah",
        id: 18,
        name: "Meet Shah",
        role: "Finance Chair",
        photo: "/images/bod/meetS.jpg",
        email: "meet-shah@gmail.com",
        linkedin: "",
        intro:
            "Our Aragorn of Finance! Leading with courage and foresight, he ensures our fiscal journey is as epic as Middle-earth itself."
        ,
    },
    {
        slug: "meet-patel",
        id: 19,
        name: "Meet Patel",
        role: "Literacy Chair",
        photo: "/images/bod/meetP.jpg",
        email: "meet-patel@gmail.com",
        linkedin: "",
        intro:
            "Introducing @meet_23.04 , our Chandler Bing of Literacy Chair at Rotaract. Could he BE any more dedicated to spreading knowledge? ",
    },
    {
        slug: "dhara-modhwadiya",
        id: 20,
        name: "Dhara Modhwadiya",
        role: "Networking Chair",
        photo: "/images/bod/dhara.jpg",
        email: "dhara-modhwadiya@gmail.com",
        linkedin: "",
        intro:
            "Our Networking Chair channeling 'The Bold Type'! Empowering connections, breaking barriers, and making every network opportunity count. ",
    },
    {
        slug: "ketul-purohit",
        id: 21,
        name: "Ketul Purohit",
        role: "Foundation Chair",
        photo: "/images/bod/ketul.jpg",
        email: "ketul-purohit@gmail.com",
        linkedin: "",
        intro:
            "Our Foundation Chair channeling the wisdom and humor of George Costanza from Seinfeld! Keeping our Rotaract base strong with a dash of wit and a lot of heart.",
    },
    {
        slug: "pradeep-bind",
        id: 22,
        name: "Pradeep Bind",
        role: "Event Planning Chair",
        photo: "/images/bod/pradeep.jpg",
        email: "pradeep-bind@gmail.com",
        linkedin: "",
        intro:
            " our Gandalf of Event Planning! Guiding us through the intricacies of organizing with wisdom and magic. One does not simply plan events without Pradeep! 🌟✨",
    },
]