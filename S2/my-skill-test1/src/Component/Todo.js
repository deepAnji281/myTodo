import React from 'react'
import '../Css/Todo.css'
import TodoDetails from './TodoDetails'
import { useState } from 'react'
import { todoList } from '../API/Api'

const Todo = () => {

  // setting the input for onchange method
  const[inp,setInp]=useState('');
  // creating items array to store list value
  const[items,setItems]=useState([]);
  const AddToBasket=()=>{

    
    
    
    setItems((oldItems)=>{
      
      return[...oldItems,inp]
    })
    setInp('')
    
    

  }
  const deleteItems=(id)=>{
  setItems((oldItems)=>{
    return oldItems.filter((arrEle,index)=>{
        return index!==id
    })
  })

  

  }
  const handleChange=(event)=>{
    event.preventDefault();
    setInp(event.target.value);
    
  }
  
  
   return (
    <div className='todo-template'>
    <h1 style={{color:'yellow',fontStyle:'italic'}}>Add Your Task</h1>
    
    <div className='todo'>
      <input type='text' placeholder='enter your task' value={inp} onChange={handleChange}/><br/>
      <button onClick={AddToBasket}>+</button>

    </div>

     
      
      {
        items.map((val ,idx)=>{
          return <TodoDetails val={val} key={idx} id={idx} onSelect={deleteItems}/>
        })
      }
      
    
  

      
      
    </div>
)
}

export default Todo
