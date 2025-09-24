import React, {useState} from 'react'
import './App.css'
import TodoWrapper from './components/TodoWrapper'



function App({addTodo, todos}) {
  

  return (
    <div className="App">
      <TodoWrapper addTodo={addTodo} todos={todos}/>
    </div>
  )
}

export default App
