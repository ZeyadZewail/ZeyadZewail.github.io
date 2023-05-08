import { Html, useProgress } from "@react-three/drei/web";
const Loader = () => {
	const { progress } = useProgress();

	return (
		<Html center>
			<span className="canvas-load"></span>
			<p
				style={{
					fontSize: 36,
					color: "#f1f1f1",
					fontWeight: 800,
					marginTop: 40,
				}}>
				{progress.toFixed(2) + "%"}
			</p>
		</Html>
	);
};

export default Loader;
