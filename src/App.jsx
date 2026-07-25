import React, { useState } from 'react'

function App() {

  const[tasks,setTasks]=useState("")

  function submithandler(e){
    console.log(e.target.value)
  }

  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className='h-160 w-160 bg-gray-500 flex justify-center'>
        <div className="mt-25">
          <input 
          onChange={submithandler}
           type="text" className='bg-white h-15 w-110 text-2xl mt-10'/>
          <button onClick={()=>{setTasks(prev=>prev,)}} className='bg-blue-500 w-25 h-15 '>ADD</button>
          <div className='bg-amber-50 mt-10 h-15'></div>
        </div>
      </div>
    </div>
  )
}

export default App
