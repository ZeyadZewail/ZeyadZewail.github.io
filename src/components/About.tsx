import React, { Fragment } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../util/styles";
import { services, Service } from "../constants/constants";
import { fadeIn, textVariant } from "../util/motion";
import sectionWrapper from "../hoc/SectionWrapper";
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
					<img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
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
			<motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum vitae est vel dignissim. Duis sit amet
				bibendum nisl, at sagittis lectus. Nunc a vehicula mauris. Donec volutpat elementum nibh, eget mattis nisi
				facilisis vel. Proin ornare augue sit amet arcu eleifend, nec venenatis elit posuere. Etiam vitae rhoncus nisl.
				Ut vitae massa metus. Cras lobortis rutrum sem, vel efficitur risus. Quisque eu tempus quam, non tincidunt
				magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut hendrerit
				feugiat gravida. Phasellus dignissim, mauris condimentum aliquam euismod, ipsum lectus tristique arcu, at
				laoreet nulla dui sit amet felis. Morbi posuere lacus quis tortor consequat, ac commodo eros molestie. Etiam
				posuere diam in nulla mattis commodo. Vestibulum risus mi, molestie vel tempus sed, mollis a purus. Integer id
				iaculis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eu
				porttitor risus. In at scelerisque dui. Proin volutpat, mi interdum ullamcorper ultricies, odio massa porta
				libero, in elementum dolor sapien ac enim. In fringilla venenatis sodales. Vivamus ac laoreet dolor. Duis ornare
				sollicitudin dolor id egestas. Sed at odio vehicula, tincidunt massa sit amet, convallis lacus. Interdum et
				malesuada fames ac ante ipsum primis in faucibus. Duis malesuada nisi elit, vel efficitur magna mattis eget.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => {
					return <ServiceCard key={service.title} service={service} index={index} />;
				})}
			</div>
		</Fragment>
	);
};

export default sectionWrapper(About, "about");
