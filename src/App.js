
import { useEffect, useState } from 'react';
import { FormControl, Button} from 'react-bootstrap';


function App() {
  const [todoList, setTodoList]= useState([])
  const [todo,setTodo]= useState('')
  const addTodo=()=>
  {
    console.log(todo)
    setTodoList(prevTodoList=> [...prevTodoList, todo])
    setTodo('')
  }
  useEffect(() => {console.log (todoList) } , [todoList])
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className="d-flex w-50">
        <FormControl
          className="w-75 mr-4"
          placeholder="Todo Input"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
          
        
        />
        <Button className="ms-5" onClick={()=>addTodo()}>Add Todo</Button>
      </div>

    <div className='mt-5'>

      {
        todoList.map(
          (todoItem, index) => <div key={index}>{todoItem}</div>
          )
      }
    </div>
    </div>
  );
}


export default App;
  