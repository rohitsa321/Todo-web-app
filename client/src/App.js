
import React, {useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';
import Task from"./Task"
import { useStateContext } from './StateProvider';

function App() {
  const [newTask,setNewtask]=useState({task:""});
  
  const [tasks,dispatch]=useStateContext();
  
  async function fetch(){ 
          await axios.get('http://localhost:3000')
          .then((res)=>{
              dispatch({
                 type:"setTasks",
                 tasks:res.data
              });
          })
          .catch((err)=>{})  
   }

  useEffect(() => {
    
         fetch();
  }, [dispatch])
  
  
  const addTask=async ()=>{
          await axios.post('http://localhost:3000/add',newTask)
          .then((res)=>{
            fetch()
          }).catch((err)=>{
             alert("error"+err);
          })
          setNewtask({task:""});
  }

  return (
    tasks?(
    <div className="app">
       <div className="app_box">
         <h3>ToDo</h3>
           <div className="app_box_input">
             <input value={newTask.task} onChange={(e)=>setNewtask({task:e.target.value})}/>
             <button onClick={addTask}>add</button>
           </div>
            
           <div className ="app_box_tasks">
             <div className="app_box_tasks_in">
                {tasks.tasks.map((task)=><Task key={task.id} task={task}/>)}
             </div>
           </div>  

       </div>
    </div>):null
  );
}

export default App;