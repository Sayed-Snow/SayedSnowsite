import { background, dental, farmdash, ktcd, nike, yaseenLevy } from "../assets";

 const serviceData = [
    {
        id:0,
        category: 'Web Devlopement',
        title: "UI / UX Design",
        text: "Web designer craft the overall vision & plan for a website layout. Professional development: Start-up, Business, or Personal.",
    },
    {
        id:4,
        category: 'Web Devlopement',
        title: "Full Stack Developement",
        text: "The whole process of creating a website from design to implementation. Professional logo development: Start-up, Business, or Personal.",
    },
    {
        id:1,
        category: 'Advertising',
        title: "Logo Design",
        text: "Logo design distils a brand's essence into a captivating visual symbol. Attract your dream customers with a logo that instantly communicates your value.",
    },
    {
        id:2,
        category: 'Mobile Devlopement',
        title: "IOS & Android",
        text: "Mobile Application Developer crafts the overall vision from the plan/layout. Professional development: Start-up, Business, or Personal.",
    },
    {
        id:3,
        category: 'Web Devlopement',
        title: "Web Customise",
        text: "Need your website customised? Professional development: Start-up, Business, or Personal.",
    },


];

const testimonialData = [
    {
        id:0,
        name: 'Web Devlopement',
        position: "Web Design",
        text: "Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business,Company, or Personal.",
        picture: background
    },
    {
        id:1,
        name: 'Web Devlopement',
        position: "Web Design",
        text: "Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business,Company, or Personal.",
        picture: yaseenLevy
    },
    {
        id:2,
        name: 'Web Devlopement',
        position: "Web Design",
        text: "Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business,Company, or Personal.",
        picture: background

    },
    {
        id:3,
        name: 'Web Devlopement',
        position: "Web Design",
        text: "Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business,Company, or Personal.",
        picture: background
    },
    {
        id:4,
        name: 'Web Devlopement',
        position: "Web Design",
        text: "Web designers craft the overall vision &amp; plan for a website layout. Professional logo development: Business,Company, or Personal.",
        picture: background
    },

];



const pricingData = [   
    {
        id:0,
        category: 'RESUME/STARTUP',
        title: "1999",
        text: "Tired of resumes that blend into the beige? Let's craft a one-page powerhouse that screams your name! Five curated sections highlighting your brilliance, and ongoing support to keep you   shining. Ready to unleash your online presents? Buckle up, it's launch time! ✨",
        package: ['Modern Design', 'Web Development', '1 Page', '5 Sections', 'Ongoing Support']
    },
    {
        id:1,
        category: 'BUSINESS',
        title: "3999",
        text: "Dust off your dreams, finy titan! We're about to build a digital haven for your business. Imagine: a stunning website, sharp as your wit, with an appointment scheduler that dances to your tune. Ready to unleash your online empire? Buckle up, it's launch time! ✨",
        package: ['Modern Design', 'Web Development', 'Online Contact', 'Online Appointment Scheduler', 'Photography']
    },
    {
        id:2,
        category: 'ECOMMERCE',
        title: "7999",
        text: "Forget brick-and-mortar, your dream store's about to blast off into cyberspace! I'll craft a sleek site, integrate seamless payments, and make your produets shimmer like supernovae. Ready to unleash your e-commerce empire? Buckle up, it's launch time! ✨",
        package: ['Modern Design', 'Web Development', 'Payment Gateway', 'Delivery Setup', 'Store Products']
    
    },
    ]
const educationData = [   
        {
            id:0,
            range: '2022 - 2022',
            location: "CPUT",
            text: "Algorithms and Data Science",
            position: 'Advanced Diploma: ICT in Application Development'
        },
        {
            id:1,
            range: '2019 - 2021',
            location: "CPUT",
            text: "Taking up specialization courses in software science.",
            position: 'Diploma: ICT in Application Development'
        },
        {
            id:2,
            range: '2018 - 2018',
            location: "CPUT",
            text: "Learning the basic of Websites",
            position: 'Higher Certification in ICT'
        },
        ]   
const workData = [   
            {
                id:2,
                range: '2024 - Current',
                location: "Freelancing",
                text: "Building and customising websites for local businesses. ✨✨✨",
                position: 'Web Developer'
            },
            {
                id:1,
                range: '2023 - 2023',
                location: "ShiftTech (The Rank Group)",
                text: "Developing a POC mobile app using Flutter for the company.",
                position: 'Junior Software Developer'
            },
            {
                id:0,
                range: '2021 - 2022',
                location: "Principa Decisions (Pty) Ltd",
                text: "Upgrading workflow engine for their web app.",
                position: 'Software Developer Intern'
            },


            ]
const caseData = [   
    {
        name: "Keep The Children Dream's",
        position: "Web Development",
        text: "A rebranding of a out dated website. Create a more modern looking website for a NPO. Support Them!!!",
        picture: ktcd
    },
    {
        name: "Nike Clone",
        position: "Web Development",
        text: "A practices project, made a clone Nike website using only tailwind. It was perfect practice for CSS and flex box",
        picture: nike
    },
    {
        name: "Local Dentist POC",
        position: "Web Design",
        text: "From old-school smiles to sleek online presence. Make the best first impression with a modern dental website. Local business making a site for them. ",
        picture: dental
    },
    {
        name: "FarmDash",
        position: "Web Development",
        text: "Ditch messy records & scattered data. Farm smarter with Smart Dashboard: all your animals, sales, weather, tasks & insights - in one powerful glance.   ☀️  (WIP)",
        picture: farmdash
    },

]
const sectionsData = [
    'home',
    'services',
    'works',
    'resume',
    'pricing',
    'contact'
];

export {
    serviceData,
    pricingData,
     testimonialData,
     educationData, 
     workData,
     caseData,
     sectionsData
}