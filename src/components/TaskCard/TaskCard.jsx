import React, { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdOutlineDoneOutline } from 'react-icons/md';

const TaskCard = ({ todo, setTodos, todos, completed, setCompleted }) => {
	const { currentTodo, time, date } = todo;

	const handleDeleteTask = (task) => {
		console.log(task);
		const remainingTodos = todos.filter((todo) => todo.currentTodo !== task);
		setTodos(remainingTodos);
	};

	const handleCompleteTask = (task) => {
		const remainingTodos = todos.filter((todo) => todo.currentTodo !== task);
		setTodos(remainingTodos);
		const complete = todos.filter((task) => task.currentTodo === currentTodo);
		setCompleted([...completed, complete[0]]);
	};

	return (
		<div className="flex items-center justify-around">
			<div className="bg-white hover:scale-105 duration-700 hover:shadow-inner  shadow-2xl mx-auto rounded-xl p-8">
				<h1 className="text-center uppercase font-extrabold text-4xl my-5">{currentTodo} </h1>

				<div className="text-center font-semibold space-y-2 mb-7">
					<h1>Date Added - {date}</h1>
					<h1>Time Added - {time}</h1>
				</div>

				<div className="flex justify-center gap-10">
					<button
						className="hover:scale-125 duration-500 mt-5"
						onClick={() => handleDeleteTask(currentTodo)}>
						<BsFillTrashFill className="text-red-700 text-2xl" />
					</button>
					<button
						className="hover:scale-125 duration-500 mt-5"
						onClick={() => handleCompleteTask(currentTodo)}>
						<MdOutlineDoneOutline className="text-green-800 text-2xl" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TaskCard;
