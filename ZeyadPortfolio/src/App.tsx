import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Name from "./Components/Name/Name";
import Navbar from "./Components/Navbar/Navbar";

function App() {
	return (
		<div className="h-full w-full">
			<Navbar />
			<Name />
		</div>
	);
}

export default App;
