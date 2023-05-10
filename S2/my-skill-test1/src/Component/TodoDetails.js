import React from 'react'
import { useState } from 'react'
import '../Css/TodoDetails.css'
// in this js file we are listing the list items

const TodoDetails = (props) => {
  
  return (
    <div className='todo-details'>
    <div className='todo-packages'>
    <h4 className='h1'>{props.val}</h4>
    <button onClick={()=>props.onSelect(props.id)}>X</button>
        
    </div>
      
    </div>
  )
}

export default TodoDetails
