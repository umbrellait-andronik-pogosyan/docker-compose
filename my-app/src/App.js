import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([{title: 'task 1', closed: false, id: 123}, {title: 'task 2', closed: true, id: 1234}])

  useEffect(() => {
    console.log(inputValue, todos)
  }, [inputValue])

  function handeAddTodo (value) {
    if(value) {
      setTodos((prev) => {
        let result = prev.concat()
  
        result.push({id: Math.random(), title: value, closed: false})
  
        return result
      })
      setInputValue('')
    }
  }

  const getAllTodos = async () => {
    try {
      await fetch('/api/todo',{ method: 'GET', mode: 'no-cors',})
      .then(res => console.log(res))
    } catch (e) {
      console.log(e)
    }
  }

  const sayHello = async () => {
    try {
      await fetch('http://localhost:3080/hello',{ method: 'GET', mode: 'no-cors'})
      .then(res => res.json())
      .then(r => console.log(r))
    } catch (e) {
      console.log(e)
    }
  }

  const createNewTodo = async (title) => {
    try {
      await fetch('/api/todo/create', {
        method: 'POST', 
        mode: 'no-cors',
        body: JSON.stringify({title, closed: false})})
      .then(res => console.log(res))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getAllTodos()
  }, [])

  return (
    <div className="App">
      <input
        placeholder='yout task'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => sayHello()}>Send</button>
      {todos.map(el => {
        return <div className={el.closed ? 'closed' : 'opened'} key={el.id}>{el.title}</div>
      })}
    </div>
  );
}

export default App;
