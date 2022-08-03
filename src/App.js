import { useEffect, useState } from 'react';
import { FormControl, Button, Form, FormCheck } from 'react-bootstrap';
import {ReactComponent as DeleteIcon} from './assets/DeleteIcon.svg'
import {ReactComponent as EditIcon} from './assets/EditIcon.svg'
import {ReactComponent as SaveIcon} from './assets/SaveIcon.svg'
import { v4 as uuidv4 } from 'uuid';
import { isEditable } from '@testing-library/user-event/dist/utils';



function App() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    console.log(todo)
    setTodoList(prevTodoList => [...prevTodoList, {id:uuidv4(), todo: newTodo, isEditable:false, isCompleted:false}])
    setNewTodo('')
  }

    const completeTodo=(id)=>{
      setTodoList(prevTodoList => prevTodoList.map(todoItem=>todoItem.id === id ? {...todoItem,isCompleted : !todoItem.isCompleted} :todoItem))
    }

    const editTodo =(id,oldTodo)=>{
      
      
      setTodoList(prevTodoList => prevTodoList.map(todoItem=>todoItem.id ===id ? {...todoItem,isEditable: !todoItem.isEditable}: todoItem))
      setTodo(oldTodo)
    }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <h1 className="mt-5">Todo List</h1>
      <div className="d-flex w-50">
        <FormControl
          className="w-75 mr-4"
          placeholder="Todo Input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button className="ms-5" onClick={() => addTodo()}>Add Todo</Button>
      </div>

      <div className='mt-5 w-75'>
        {
          todoList.map(
            (todoItem)=>
              <div key={todoItem.id}className="d-flex justify-content-between">
                <div className='d-flex w-75'>
                  <Form.Check
                  type='checkbox'
                  className='me-2'
                  value={todoItem.isCompleted}
                  onChange={()=>completeTodo(todoItem.id)}
                  />
                  {
                    !todoItem.isEditable ?
                    <label className={`${todoItem.isCompleted ? 'text-decoration-line-through':'' } fw-bold`}>
                      {todoItem.todo}
                    </label>
                  :
                        
                  <FormControl
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                  }
                
                </div>
                <div>
                
                  {
                    !todoItem.isEditable ?
                    <EditIcon width={25} height={25} style={{cursor: 'pointer'}} className="me-2" onClick={()=> editTodo(todoItem.id, todoItem.todo)}/>
                  :
                  <SaveIcon width={25} height={25}  style={{cursor: 'pointer'}}/>
                  }
                  <DeleteIcon width={25} height={25} style={{cursor: 'pointer' }} className="me-2" />

                  
                </div>
              </div>
          )

        }






        
      </div>
    </div>
  );
}


export default App;