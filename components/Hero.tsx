import React from "react";
import { motion } from "framer-motion";
import { styles } from "../util/styles";
import { ComputersCanvas } from "./canvas";

const mainColor = "#915eff";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className={"w-5 h-5 rounded-full"} style={{ backgroundColor: mainColor }} />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText}`}>
						{"Hi, I'm"} <span style={{ color: mainColor }}>Zeyad</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>I make magic happen on the web.</p>
				</div>
			</div>
			<ComputersCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about"/>
			</div>
		</section>
	);
};

export default Hero;
