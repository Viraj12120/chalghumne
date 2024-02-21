//import { useEffect } from "react";
import beach from "../assets/beach.mp4";

const Body = () => {
	/*	const fetchdata = async () => {
		const tours = await fetch(
			"https://www.makemytrip.com/api/countryList?region=in&language=eng&currency=inr"
		);
		const data = await tours.json();
		console.log(data);
	};
	useEffect(() => {
		fetchdata();
	}, []);*/

	return (
		<div className=" w-full h-screen relative  ">
			<video
				className="w-full h-screen object-cover"
				src={beach}
				autoPlay
				loop
				muted
			/>
			<div className="bg-black/10 absolute top-0 left-0 w-full h-screen" />
			<div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
				<div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
					<p>All Inclusive</p>
					<h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl">
						Private Beaches and Getaways
					</h1>
					<p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
						Fugiat ullamco sunt fugiat laboris. Aute culpa aliquip aliquip
						veniam sit proident aliquip in. Aute consectetur adipisicing minim
						occaecat laborum esse. Ad magna adipisicing sit excepteur sunt.
					</p>
					<button className="bg-white text-black">Book Now</button>
				</div>
			</div>
		</div>
	);
};
export default Body;
