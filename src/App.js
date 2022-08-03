import { useEffect, useState } from 'react';
import { FormControl, Button, Form, FormCheck } from 'react-bootstrap';
import {ReactComponent as DeleteIcon} from './assets/DeleteIcon.svg'
import {ReactComponent as EditIcon} from './assets/EditIcon.svg'
import {ReactComponent as SaveIcon} from './assets/SaveIcon.svg'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const addTodo = () => {
    console.log(todo)
    setTodoList(prevTodoList => [...prevTodoList, {id:uuidv4(), todo: todo, isEditable:false, isCompleted:false}])
    setTodo('')
  }

    const completeTodo=(id)=>{
      setTodoList(prevTodoList => prevTodoList.map(todoItem=>todoItem.id === id ? {...todoItem,isCompleted : !todoItem.isCompleted} :todoItem))
    }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className="d-flex w-50">
        <FormControl
          className="w-75 mr-4"
          placeholder="Todo Input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}


        />
        <Button className="ms-5" onClick={() => addTodo()}>Add Todo</Button>
      </div>

      <div className='mt-5 w-75'>
        {
          todoList.map(
            (todoItem)=>
              <div key={todoItem.id}className="d-flex justify-content-between">
                <div className='d-flex'>
                  <Form.Check
                  type='checkbox'
                  className='me-2'
                  value={todoItem.isCompleted}
                  onChange={()=>completeTodo(todoItem.id)}
                  />
                  <label className={`${todoItem.isCompleted ? 'text-decoration-line-through':'' } fw-bold`}>
                    {todoItem.todo}
                  </label>
                </div>
                <div>
                
                  <EditIcon width={25} height={25} style={{cursor: 'pointer'}} className="me-2" />
                  <DeleteIcon width={25} height={25} style={{cursor: 'pointer' }} className="me-2" />
                  <SaveIcon width={25} height={25}  style={{cursor: 'pointer'}}/>
                  
                </div>
              </div>
          )

        }






        
      </div>
    </div>
  );
}


export default App;