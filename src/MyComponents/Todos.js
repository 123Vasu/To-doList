import React from 'react'
import TodoItem from "../MyComponents/TodoItem"
const Todos = (props) => {   

  let mystyle = {
    minheight: "70vh", 
    margin: "40px auto"
  }
  return (
    <div className='container' style={mystyle}>
      <h3 className='text-center my-3'>Todos List</h3>   

      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/> 
      })
      }
      
    </div>
  )
}

export default Todos; 