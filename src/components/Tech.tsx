import React, { Fragment } from "react";
import sectionWrapper from "../hoc/SectionWrapper";
import { Technology, technologies } from "../constants/constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../util/motion";
import { styles } from "../util/styles";

interface TechCardInterface {
	technology: Technology;
	index: number;
}

const TechCard: React.FC<TechCardInterface> = ({ technology, index }) => {
	return (
		<Tilt className="aspect-square">
			<motion.div
				variants={fadeIn("", "spring", 0.5, 0.75)}
				className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<Tilt
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-4 xs:w-[150px]  xs:h-[150px] w-[100px] h-[100px] flex justify-evenly items-center flex-col">
					<img className="h-[50%]" src={technology.icon} />
					<p className="text-white font-bold xs:text-md text-sm flex gap-2">{technology.name}</p>
				</Tilt>
			</motion.div>
		</Tilt>
	);
};

const Tech = () => {
	return (
		<Fragment>
			<motion.div variants={textVariant(0.25)}>
				<p className={styles.sectionSubText}>Tools of the trade</p>
				<h2 className={styles.sectionHeadText}>Technologies.</h2>
			</motion.div>
			<div className="mt-10 flex flex-wrap gap-10 justify-center">
				{technologies.map((technology, index) => {
					return <TechCard key={technology.name} technology={technology} index={index} />;
				})}
			</div>
		</Fragment>
	);
};

export default sectionWrapper(Tech, "");
