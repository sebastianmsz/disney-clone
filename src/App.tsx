import React, { useState } from "react";

interface Task {
	id: number;
	text: string;
	completed: boolean;
}

const App: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState<string>("");

	const addTask = (): void => {
		if (newTask.trim() === "") return;

		const newTaskObj: Task = {
			id: Date.now(),
			text: newTask,
			completed: false,
		};

		setTasks([...tasks, newTaskObj]);
		setNewTask("");
	};

	const toggleTaskCompletion = (id: number): void => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task,
			),
		);
	};

	const deleteTask = (id: number): void => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="flex items-center justify-center h-screen bg-gray-100">
			<div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
				<h1 className="text-2xl font-bold mb-4">Tasks List</h1>
				<div className="mb-4">
					<input
						type="text"
						value={newTask}
						onChange={(e) => {
							setNewTask(e.target.value);
						}}
						className="border p-2 rounded w-full"
						placeholder="New Task..."
					/>
					<button
						onClick={addTask}
						className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
					>
						Add
					</button>
				</div>
				<ul>
					{tasks.map((task) => (
						<li
							key={task.id}
							className="flex justify-between items-center mb-2"
						>
							<span
								onClick={() => {
									toggleTaskCompletion(task.id);
								}}
								className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
							>
								{task.text}
							</span>
							<button
								onClick={() => {
									deleteTask(task.id);
								}}
								className="bg-red-500 text-white p-1 rounded"
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
