import { useState } from "react";


function ToDoList() {


    const[tasks,settasks] = useState([]);
    const[newtask,setnewtask] = useState("");

    function handleInputChange(event) {
        setnewtask(event.target.value)
    }
    function addTask() {
        if (newtask.trim() !== "") {
            settasks(t=>[...t,newtask]);
            setnewtask("");
        }
    }
    function deleteTask(index) {
        const updatedtask = tasks.filter((_,i)=>i!== index)
        settasks(updatedtask);
    }
    function MoveTaskup(index) {
        if(index>0)
        {
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]]
            settasks(updatedTask)
        }
    }
    function MoveTaskdown(index) {
        if(index<tasks.length-1)
            {
                const updatedTask = [...tasks];
                [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]]
                settasks(updatedTask)
            }
    }
    return(
        <>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <div>
                    <input type="text"
                            placeholder="Enter a Task" 
                            value={newtask}
                            onChange={handleInputChange}/>
                    <button className="add-button"
                            onClick={addTask}
                            >Add</button>
                </div>
                <ol>
                    {tasks.map((task,index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button"
                                    onClick={()=> deleteTask(index)}
                                    >Delete</button>
                            <button className="move-button"
                                    onClick={()=> MoveTaskup(index)}
                                    >Move Up</button>
                            <button className="move-button"
                                    onClick={()=> MoveTaskdown(index)}
                                    >Move Down</button>
                        </li>)}
                </ol>
            </div>
        </>
    );
}
export default ToDoList