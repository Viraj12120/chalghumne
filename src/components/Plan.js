const Plan = () => {
	return (
		<div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
			<div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
				<img
					className="row-span-3 object-cover w-full h-full p-2"
					src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?q=80&w=434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="/"
				/>
				<img
					className="row-span-2 object-cover w-full h-full p-2"
					src="https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?q=80&w=1822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="/"
				/>
				<img
					className="row-span-6 object-cover w-full h-full p-2"
					src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="/"
				/>
				<img
					className="row-span-3 object-cover w-full h-full p-2"
					src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="/"
				/>
			</div>
			<div className="flex flex-col h-full justify-center">
				<h3 className="text-3xl md:text-5xl pb-10 pl-48 font-serif">
					Plan your next Trip
				</h3>
				<p className="text-xl pl-32 font-mono">
					hello ji, kaha ghumne ka plan bana rahe ho
				</p>
				<p className="text-xl pl-32 font-mono">
					hello ji, kaha ghumne ka plan bana rahe ho
				</p>

				<div>
					<button className="border-black mr-4 hover:shadow-xl mt-5 mx-32">
						Learn More
					</button>
					<button className="bg-black text-white hover:shadow-xl ">
						Book your Trip
					</button>
				</div>
			</div>
		</div>
	);
};
export default Plan;
