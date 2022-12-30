import React, { useState } from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import TaskCard from '../TaskCard/TaskCard';

const AddTodos = () => {
	// const [todo, setTodo] = useState('');

	const [todos, setTodos] = useState([]);

	const [completed, setCompleted] = useState([]);

	console.log(completed);

	const addTodo = (event) => {
		event.preventDefault();
		const currentTodo = event.target.todo.value;
		const now = new Date();
		const time = now.toLocaleTimeString();
		const date = now.toLocaleDateString()
		const recentTodo = { currentTodo, time,date };
		setTodos([...todos, recentTodo]);

		event.target.reset();
	};

	return (
		<div className="my-20">
			<div className=" w-[60%] mx-auto">
				<form id="todo-form" onSubmit={addTodo}>
					<input
						type="text"
						name="todo"
						required
						placeholder="Add Task"
						className="mt-1 w-[90%]  mb-5 lg:mb-0 lg:w-[80%] rounded-md border-gray-200 shadow-sm sm:text-sm focus-visible:border-orange-800 "
					/>
					<button
						type="submit"
						className="inline-block rounded bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 ml-10 mx-auto"
						>
						<span className="block rounded-sm bg-white px-8 py-2 text-sm font-medium hover:bg-transparent duration-500">
							Add Task
						</span>
					</button>
				</form>
			</div>

			<div className="w-[80%] mx-auto mt-20">
				<h1 className="text-4xl font-extrabold text-center my-10 underline underline-offset-4">
					Pending Tasks
				</h1>

				{
					todos.length === 0 && <h1 className='text-center text-3xl font-bold text-red-600'>No pending tasks at the moment..</h1>
				}
				
				<div className="space-y-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

					
					{todos.map((todo, index) => (
						<TaskCard
							key={index}
							todo={todo}
							todos={todos}
							setTodos={setTodos}
							completed={completed}
							setCompleted={setCompleted}
						/>
					))}
				</div>
			</div>

			<div className="w-[80%] mx-auto mt-20">
				<h1 className="text-4xl font-extrabold text-center my-10 underline underline-offset-4">
					Completed Tasks
				</h1>
				<div className="space-y-5">
					{completed.map((task, i) => (
						<CompletedTask task={task} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AddTodos;
