import React from 'react';
import { useState } from 'react';
import TodoList from './ToDoList'
const App=()=>{
const [inputList, setInputList]=useState();
const [item,setItems]=useState([]);
const itemEvent=(event)=>{
  setInputList(event.target.value)
}
const listofItems=()=>{
   setItems((oldItems)=>{
     return [...oldItems,inputList]; 
   })
}
const deleteItem =(id)=>{
  setItems((oldItem)=>{
    return oldItem.filter((arrEle,index)=>{
      return index!==id;
    })
  })
}
  return(
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br/>
        <h1>To Do List</h1>
        <br/>
        <input type='text' placeholder='Add Items'
        value={inputList}
         onChange={itemEvent}></input>
        <button onClick={listofItems}>+</button>
       <ol>
         {
           item.map((itemval,index)=>{
             return <TodoList key={index}
              id={index}  
              text={itemval}
              onSelect={deleteItem}
              />
           })
         }
       </ol>
      </div>
    </div>
    </>
  )
}

export default App;