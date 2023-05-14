import React, { Fragment } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../util/styles";
import { experiences, Experience } from "../constants/constants";
import sectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../util/motion";
import Image from "next/image";

interface ExperienceCardInterface {
	experience: Experience;
	index: number;
}

const ExperienceCard: React.FC<ExperienceCardInterface> = ({ experience, index }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				experience.icon === "" ? null : (
					<div className="flex justify-center items-center w-full h-full">
						<Image src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
					</div>
				)
			}>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li key={"Experience " + index} className="text-white-100 text-[14px] pl-1 tracking-wider">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<Fragment>
			<motion.div variants={textVariant(0.25)}>
				<p className={styles.sectionSubText}>{"What i've done so far"}</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={experience.company_name + experience.date} experience={experience} index={index} />
					))}
				</VerticalTimeline>
			</div>
		</Fragment>
	);
};

export default sectionWrapper(Experience, "experience");
