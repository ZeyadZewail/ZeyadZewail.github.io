"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../util/styles";
import { EarthCanvas } from "./canvas";
import sectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../util/motion";

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const { name, value } = target;

		setForm({ ...form, [name]: value });
	};
	const handleChangeArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
		const target = e.target as HTMLTextAreaElement;
		const { name, value } = target;

		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_es7nfeb",
				"template_asxzq0m",
				{
					from_name: form.email,
					to_name: "Zeyad",
					from_email: form.email,
					to_email: "zeyadzewail@gmail.com",
					message: form.message,
				},
				"w_FhFNEGme_GdNeRR"
			)
			.then(
				() => {
					setLoading(false);
					alert("Thank you for your email, i will be in touch soon.");
					setForm({ name: "", email: "", message: "" });
				},
				(error) => {
					setLoading(false);
					console.log(error);
					alert("Something Went Wrong");
				}
			);
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}> Get in Touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							autoComplete="hidden"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your Email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							autoComplete="hidden"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChangeArea}
							placeholder="What's your message?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
							autoComplete="hidden"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl self-end hover:bg-transparent">
						{loading ? "Sending..." : "Send"}
					</button>
				</form>
			</motion.div>

			<motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default sectionWrapper(Contact, "contact");
