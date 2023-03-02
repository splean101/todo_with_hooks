import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import InputForm from './components/InputForm'
import List from './components/List'
import ListItem from './components/ListItem'
import {v4 as uuid} from 'uuid'


function App() {
    const arr = ['one', 'two', 'tree']
  const [todo, setTodo] = useState('');
  const[todos, setTodos] = useState([['one', 'two', 'tree']])

  todos.map(i => console.log('iii'));

  function addTodo (e){
    setTodo(e.target.value)
  }

  function submit (){
    console.log('submit');
        setTodos(todo)

  }

  return (
    <div className="App">
      <InputForm onInput={addTodo} />
      
      <Button onClick={submit}>add</Button>
      <ul> 
  {todos.map((todo)=><ListItem key={uuid()}>{todo}</ListItem>  )}
        
        
      </ul>      
    </div>
  )
}

export default App
