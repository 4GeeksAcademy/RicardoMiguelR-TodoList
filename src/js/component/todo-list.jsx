import React, { useState } from "react";

const TodoList = () => {
	const [task, setTask] = useState('');
	const [count, setCount] = useState(0);
	const [added, setAdded] = useState ([]);
	const [mouseHover, setMouseHover] = useState();
	function addTask (e) {
		if (e.key === 'Enter') {
			setAdded(added.concat([task]));
			setTask("");
			setMouseHover(null)
			console.log('Enter/Add Task')
		}
		if (e.key == 'Enter') {
			setCount(count + 1);
			console.log(count);
		}
	}

	function deleteTask (index) {
		const byeTask = [...added];
    	byeTask.pop(index, ['']);
    	setAdded(byeTask);
	};

    return ( 
		<>
			<div className="todo-box">
				<input onKeyDown={addTask} onChange={(e) => { setTask(e.target.value) }} value={task} className="todo-input p-3" type="text" placeholder='Add Tasks By Pressing Enter Please'/>
				<p className="list"> {added.map((added, index) => (
					<p className="task-absolute mt-3 mx-5" key={index} onMouseEnter={() => setMouseHover(index)} onMouseLeave={() => setMouseHover(null)}>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
							<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
						</svg> {added} 
						{mouseHover === index && (
							<span style={{cursor: "pointer", color: 'rgba(63, 189, 69, 0.671)'}} onClick={() => deleteTask(index)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill mx-3" viewBox="0 0 16 16">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
								</svg>
							</span>
						)}
					</p>
				))}
				</p>
				<p className="add-task"> {count == 0 ? 'No Added Tasks...' : count + ' Added Task'} 
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
						<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
					</svg>
				</p>
			</div>
		</>
	);
};

export default TodoList;
