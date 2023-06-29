"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../util/styles";
import { github, external_link } from "../assets";
import sectionWrapper from "../hoc/SectionWrapper";
import { Project, projects } from "../constants/constants";
import { fadeIn, textVariant } from "../util/motion";
import Image from "next/image";

interface ProjectCardInterface {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({ project, index }) => {
	return (
		<div className="flex justify-center w-full">
			<Tilt
				option={{ max: 45, scale: 1, speed: 450 }}
				className="bg-tertiary p-5 rounded-2xl w-[360px] h-[450px] flex flex-col">
				<div className="relative w-full h-[230px] ">
					<Image src={project.image} alt={project.name} className="w-full h-full object-cover rounded-2xl" />
					<div className="absolute inset-0 flex flex-col gap-2 items-end m-3 card-img_hover">
						{project.source_code_link === "" ? null : (
							<div
								onClick={() => {
									window.open(project.source_code_link, "_blank");
								}}
								className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
								<Image src={github} alt="github" className="w-3/5 h-3/5 object-contain" />
							</div>
						)}
						<div
							onClick={() => {
								window.open(project.link, "_blank");
							}}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
							<Image
								src={external_link}
								className="h-5 self-center cursor-pointer"
								style={{ filter: "invert(100%)" }}
								alt="external link"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5 flex flex-grow flex-col justify-between gap-2">
					<div>
						<h3 className="text-white font-bold text-[24px] flex gap-2">{project.name}</h3>
						<p className="mt-2 text-secondary text-[14px]">{project.description}</p>
					</div>

					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<p key={tag.name} className={`text-[14px] ${tag.color}`}>
								{"#" + tag.name}
							</p>
						))}
					</div>
				</div>
			</Tilt>
		</div>
	);
};

const Works = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 408px)");

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Fragment>
			<motion.div variants={textVariant(0.25)}>
				<p className={styles.sectionSubText}>My Work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					The Following projects showcase my skills and experiences through real-world examples of my work. Each project
					is briefly described with links to the code repositories and live demos. These projects reflect my ability to
					solve complex problems, work with different technologies and manage projects effectively.
				</motion.p>
			</div>
			<div
				className="mt-20 grid gap-7"
				style={{
					gridTemplateColumns: isMobile
						? "repeat(auto-fit, minmax(200px, 1fr))"
						: "repeat(auto-fit, minmax(360px, 1fr))",
				}}>
				{projects.map((project, index) => (
					<ProjectCard key={"Project " + index} index={index} project={project} />
				))}
			</div>
		</Fragment>
	);
};

export default sectionWrapper(Works, "work");
