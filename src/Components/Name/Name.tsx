import "./Name.css";

const Name = () => {
	return (
		<div className="flex flex-row justify-center flex-1 gap-8">
			<div className="w-fit h-full flex flex-col justify-center gap-4">
				<div className="lg:text-8xl text-5xl text-center">Zeyad Zewail</div>
				<div className="flex justify-center h-fit gap-2">
					<div className="box">
						<ul>
							<li className="lg:text-4xl text-1xl item-1">Frontend</li>
							<li className="lg:text-4xl text-1xl item-2">Backend</li>
							<li className="lg:text-4xl text-1xl item-3">Creative</li>
						</ul>
					</div>
					<div className="lg:text-4xl text-1xl">Developer</div>
				</div>
			</div>
		</div>
	);
};

export default Name;
