import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMesaage from "./component/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from "react";

function App() {
  

const[todoItems,setTodoItems] = useState([]);

const handleNewItem = (itemName, itemDueDate)=>{
  console.log(`New item Add ${itemName} Date ${itemDueDate} `); 
const newTodoItems = [...todoItems,{name:itemName, duedate:itemDueDate},];
  setTodoItems(newTodoItems);
}

const handleDeleteItem = (todoItemName) =>{
const  newTodoItems =todoItems.filter(item => item.name !== todoItemName);
setTodoItems(newTodoItems);
  console.log(`Item Deleted ${todoItemName}`);

}

  return (
    <>
    <center className="todo-container">
     <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMesaage></WelcomeMesaage>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
     
    </center>
    </>
  )
}

export default App;
