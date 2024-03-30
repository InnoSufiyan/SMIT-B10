import { useRef } from "react";
import { addTask, deleteTask } from "./actions";
import { useDispatch, useSelector } from "react-redux";

export const Task = () => {

    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    const inputRef = useRef(null);

    console.log(tasks, "==>> tasks")

    const addNewTask = () => {
        console.log("add kar raha hun")
        const task = inputRef.current.value.trim();
        console.log(task, "==>> task")
        dispatch(addTask(task))
    }

    const deleteHandler = (taskId) => {
        dispatch(deleteTask(taskId))        //
    }

    return (
        <div className="task-component">
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Add task here..."
                    ref={inputRef}
                    className="taskInput"
                />
                <button onClick={addNewTask}>Add task</button>
            </div>
            {
                tasks.map((task) => (
                    <>
                        <h1>{task.data}</h1>
                        <button onClick={()=> deleteHandler(task.id)}>Delete</button>
                    </>
                ))
            }
        </div>
    )
}