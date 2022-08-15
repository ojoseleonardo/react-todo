import React, { useState } from 'react'
import Tasks from "./components/Tasks"
import "./App.css"

const App = () => {
  // let message = 'Hello World!'
  const [tasks, setTasks] = useState(
    [
      {
        id: "1",
        title: "Ler Livros",
        completed: true,
      },

      {
        id: "2",
        title: "Estudar Programação",
        completed: false,
      },

      {
        id: "3",
        title: "Lavar Louça",
        completed: false,
      },

    ]
  )

  return (
    <>
      <div className='container' >
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App