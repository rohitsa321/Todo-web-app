
import axios from 'axios'
import React from 'react'
import { useStateContext } from './StateProvider'
import './Task.css'
export default function Task({task}) {

    const [{tasks},dispatch]=useStateContext();

    const handleClick= async()=>{
         await axios.delete("http://localhost:3000/delete",{data:task})
         .then((res)=>{})
         .catch((err)=>alert("Error: "+err));

         await axios.get('http://localhost:3000')
          .then((res)=>{
              dispatch({
                 type:"setTasks",
                 tasks:res.data
              });
          })
          .catch((err)=>alert("error"+err)) ;
    }
    
    return (
        task?(
        <div className="task">
            <div className="text">
               <p>{task.task}</p>
               <span>{task.date}</span>
            </div>
            <button onClick={handleClick}>X</button>
        </div>
        ):null
    )
}
