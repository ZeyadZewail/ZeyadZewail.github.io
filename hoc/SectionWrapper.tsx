import React, { Component } from "react";
import { motion } from "framer-motion";
import { styles } from "../util/styles";
import { staggerContainer } from "../util/motion";

const sectionWrapper = (Component: React.ComponentType, idName: string) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer(false, 0)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
				<span className="hash-span" id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default sectionWrapper;
