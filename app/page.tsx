"use client";

import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "@/components";
import heroBG from "../assets/herobg.png";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${heroBG.src})` }}>
				<Navbar />
				<Hero />
			</div>
			<About />
			<Tech />
			<Experience />
			<Works />
			<div className="relative z-0">
				<Contact />
				{/* <StarsCanvas /> */}
			</div>
		</div>
	);
}
