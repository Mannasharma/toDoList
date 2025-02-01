import { useState  } from "react"

function todo(){

    const[task,setTask]= useState(["code","eat","sleep"])
    const[newtask,setNewTask] = useState("")
    
        function handletask(e){
            
            setNewTask(e.target.value)
        }

        function addtask(){
        if(newtask.trim()!== ''){

            setTask(t=>[...t,newtask]);
            setNewTask("");
        }

        }

        
        function deleteTask(index){
            const update = task.filter((_,i)=> i!==index)
            setTask(update)
        }
        function moveup(index){
            if(index > 0){
                
                const updatedtask = [...task];
                [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
                setTask(updatedtask);
            }

        }
        function movedown(index){
            if(index < task.length-1){
                
                const updatedd = [...task];
                [updatedd[index],updatedd[index+1]]=[updatedd[index+1],updatedd[index]];
                setTask(updatedd);
            }
        }
        function taskcomplete(index){

            document.getElementById(index).style.textDecoration = "line-through";

        }
        function tasknotcomplete(index){

            document.getElementById(index).style.textDecoration = "";

        }

    return(
        <>
        <div className="main">
            <h2>To-Do-List</h2>
            <input type="text"  id="task" onChange={handletask} value={newtask}/>
            <button id="add-task" onClick={addtask}>Add </button>
            <ol>
                {task.map((element,index)=><li key={index}>
                    
                    <span id={index}>{element}</span>
                    <input type="checkbox" className="" onClick={(e)=>{(e.target.checked) ? taskcomplete(index): tasknotcomplete(index)}} />
                    <button className="delete" onClick={()=>deleteTask(index)}>delete</button>
                    <button className="move-up" onClick={()=>moveup(index)}>👆</button>
                    <button className="move-down" onClick={()=>movedown(index)}>👇</button>
                    
                     </li> )}
            </ol>
            
            
        </div>
        </>
    )
}

export default todo