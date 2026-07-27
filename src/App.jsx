import React, { useState } from 'react'

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function submithandler(e) {
    
   
    setTask(e.target.value)
    console.log(task)
  
  }

  function submit(){

    if(task===""){
      alert("Please enter a task");
      return;
    }
     setTasks([...tasks,task])
    localStorage.setItem("task",JSON.stringify(tasks))
   
    console.log(tasks)
    setTask("")
  }

  return (
    <div className="bg-slate-950 min-h-screen flex justify-center items-center">

      <div className="w-[600px] bg-slate-800 rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-8">
          React Todo
        </h1>

        <div className="flex items-center gap-3">

          <input
            onChange={submithandler}
            value={task}
            type="text"
            placeholder="Enter a task..."
            className="flex-1 h-14 px-4 rounded-xl bg-slate-100 text-slate-900 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button type="submit"
            onClick={submit}
            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-200"
          >
            ADD
          </button>

        </div>

        <div className="mt-8 bg-slate-700 rounded-xl p-4 min-h-[70px] text-white text-lg">
          {tasks.length === 0 ? (
            <div className='text-center text-2xl'>No Tasks</div>
          ) : (
            JSON.parse(localStorage.getItem("task") || "[]").map((data,index)=>{
             return(
              <div className='flex justify-between p-5 border-2 m-2 text-2xl'
              key={index}>{data} 
              <div className='flex justify-between w-30'><button className='bg-blue-500 rounded-2xl size-12'
             onClick={()=>{
              let store=prompt("Enter new task ");
              const updatedTasks = [...tasks];
              updatedTasks[index] = store;
              setTasks(updatedTasks);
             }}>Edit</button>
            <button className='bg-red-800 rounded-2xl size-12'
             onClick={()=>{setTasks(tasks.filter((data,ind)=>ind!=index))}}>Del</button>
             </div></div>
            )}))}
        </div>

      </div>

    </div>
  )
}

export default App