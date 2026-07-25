import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState("")

  function submithandler(e) {
    console.log(e.target.value)

    setTasks
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
            type="text"
            placeholder="Enter a task..."
            className="flex-1 h-14 px-4 rounded-xl bg-slate-100 text-slate-900 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => { setTasks(prev => prev) }}
            className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-200"
          >
            ADD
          </button>

        </div>

        <div className="mt-8 bg-slate-700 rounded-xl p-4 min-h-[70px] text-white text-lg">
          {/* Tasks will appear here */}
        </div>

      </div>

    </div>
  )
}

export default App