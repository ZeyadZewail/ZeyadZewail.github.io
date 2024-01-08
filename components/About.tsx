"use client";

import React, { Fragment } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../util/styles";
import { services, Service } from "../constants/constants";
import { fadeIn, textVariant } from "../util/motion";
import sectionWrapper from "../hoc/SectionWrapper";
import Image from "next/image";

interface ServiceCardInterface {
	service: Service;
	index: number;
}

const ServiceCard: React.FC<ServiceCardInterface> = ({ service, index }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<Tilt
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
					<Image src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
					<h3 className="text-white tex-[20px] font-bold text-center">{service.title}</h3>
				</Tilt>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<Fragment>
			<motion.div variants={textVariant(0.25)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<div className="flex flex-col gap-5">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
					As an experienced Web developer, I specialize in creating captivating and responsive websites. With a keen eye
					for design and a strong command of HTML, CSS, and JavaScript, I transform concepts into stunning web
					applications. As an experienced Web developer, I specialize in creating captivating and responsive websites.
					With a keen eye for design and a strong command of HTML, CSS, and JavaScript, I transform concepts into
					stunning web applications.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => {
					return <ServiceCard key={service.title} service={service} index={index} />;
				})}
			</div>
		</Fragment>
	);
};

export default sectionWrapper(About, "about");
