import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	Postgresql,
	SQL,
	angular,
	unity,
	MUI,
	scandiweb,
	poeHarvest,
	modareseen,
	FaceDetection,
	firebase,
	portfolio,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{ id: "experience", title: "Experience" },
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

export interface Service {
	title: string;
	icon: string;
}

const services: Service[] = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Web designer",
		icon: creator,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
];

export interface Technology {
	name: string;
	icon: string;
}

const technologies: Technology[] = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{ name: "Angular", icon: angular },
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{ name: "Material UI", icon: MUI },
	{
		name: "Three JS",
		icon: threejs,
	},
	{ name: "SQL", icon: SQL },
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{ name: "Firebase", icon: firebase },
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{ name: "Unity", icon: unity },
];

export interface Experience {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
}

const experiences: Experience[] = [
	{
		title: "Full Stack Web Freelancer",
		company_name: "Independant",
		icon: "",
		iconBg: "#383E56",
		date: "august 2022 - Now",
		points: [
			"Developed responsive and user-friendly websites using modern frameworks and libraries like React and Angular.",
			"Collaborated closely with designers and backend developers to ensure seamless project delivery.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Debugged and optimized code to improve website performance and user experience.",
			"Utilized version control systems like Git for efficient code management and collaboration.",
			"Stayed updated with the latest web development trends and technologies.",
		],
	},
	{
		title: "Full Stack Web Developer",
		company_name: "Scandiweb",
		icon: scandiweb,
		iconBg: "#E6DEDD",
		date: "Feb 2023 - May 2022",
		points: [
			"Developed and maintained Ecommmerce applications using React (SPWA) and magento 2 CMS (PHP).",
			"Collaborated in an Agile Environment with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Communicated with customers in order to fulfill their requests and diagnose issues.",
			"Participating in code reviews and provided constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial: "",
		name: "",
		designation: "",
		company: "",
		image: "",
	},
];

interface Tag {
	name: string;
	color: string;
}

export interface Project {
	name: string;
	description: string;
	tags: Tag[];
	image: string;
	source_code_link: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "My portfolio",
		description: "A Beautiful and mobile responsive portfolio.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "ThreeJS",
				color: "text-gray-600",
			},
			{
				name: "tailwind",
				color: "text-cyan-400",
			},
			{ name: "GithubPages", color: "" },
		],
		image: portfolio,
		source_code_link: "https://github.com/ZeyadZewail/ZeyadZewail.github.io",
		link: "https://zeyadzewail.github.io/",
	},
	{
		name: "modareseen.com",
		description:
			"Full stack website using nextJS, material UI and firebase for a freelance client. Worked in a team of 2 people with a fellow freelancer",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "NextJs",
				color: "text-red-300",
			},
			{
				name: "MaterialUI",
				color: "text-cyan-400",
			},
			{ name: "Firebase", color: "text-yellow-400" },
		],
		image: modareseen,
		source_code_link: "",
		link: "https://modareseen.com/",
	},
	{
		name: "Path of Exile Harvest Game",
		description: "Web Game simulating path of exile card game with accurate replicated ingame UI and mechanics",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{ name: "remix", color: "pink-text-gradient" },
			{
				name: "fly.io",
				color: "text-violet-400",
			},
			{
				name: "tailwind",
				color: "text-cyan-400",
			},
		],
		image: poeHarvest,
		source_code_link: "https://github.com/ZeyadZewail/poe-gambagame",
		link: "https://gambagamealpha.fly.dev/",
	},
	{
		name: "Face Detection WebApp",
		description:
			"React Web app where you give it a link to an image and it detects faces and highlights them using clarifAI API.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "nodeJS",
				color: "green-text-gradient",
			},
			{
				name: "sqLite",
				color: "pink-text-gradient",
			},
			{
				name: "fly.io",
				color: "text-violet-400",
			},
		],
		image: FaceDetection,
		source_code_link: "https://github.com/ZeyadZewail/Face-Detection-Fullstack-WebApp",
		link: "https://facerecognition.fly.dev/",
	},
];

export { services, technologies, experiences, testimonials, projects };
