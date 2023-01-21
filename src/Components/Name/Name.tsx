import "./Name.css";

const Name = () => {
	return (
		<div className="flex flex-row justify-center flex-1 gap-8">
			<div className="w-fit h-full flex flex-col justify-center gap-4">
				<div className="text-8xl">Zeyad Zewail</div>
				<div className="flex justify-center h-fit">
					<div className="box">
						<ul>
							<li className="text-4xl item-1">Frontend</li>
							<li className="text-4xl item-2">Backend</li>
							<li className="text-4xl item-3">Creative</li>
						</ul>
					</div>
					<div className="text-4xl">Developer</div>
				</div>
			</div>
			<div className="flex flex-col justify-center h-full">
				<img
					className="h-80 rounded-full overflow-hidden"
					src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Name;
