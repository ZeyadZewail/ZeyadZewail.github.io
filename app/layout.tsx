import "./globals.css";
import logo from "../assets/logo.svg";

export const metadata = {
	title: "Zeyad Zewail",
	description: "Zeyad Zewail's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href={logo.src} />
			</head>
			<body>{children}</body>
		</html>
	);
}
