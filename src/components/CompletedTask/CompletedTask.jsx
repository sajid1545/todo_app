import React from 'react';

const CompletedTask = ({ task }) => {
	const { currentTodo, time,date } = task;

	return (
		<div>
			<div className="bg-white lg:w-2/4 p-10  shadow-xl mx-auto rounded-2xl ">
				<h1 className="text-center uppercase font-extrabold text-4xl my-5"> {currentTodo} </h1>
				<div className="text-center font-bold space-y-4 mb-10">
					<h1>Date Added - {date}</h1>
					<h1>Time Added - {time}</h1>
				</div>
			</div>
		</div>
	);
};

export default CompletedTask;
