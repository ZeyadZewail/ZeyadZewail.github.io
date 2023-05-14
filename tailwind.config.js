/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		"text-cyan-400",
		"text-violet-400",
		"text-red-300",
		"text-gray-600",
		"text-yellow-400",
		"font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
		"text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
		"text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
		"sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
		"sm:px-16 px-6 sm:py-16 py-10",
		"sm:py-16 py-6",
	],
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#aaa6c3",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
};
