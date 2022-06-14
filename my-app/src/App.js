import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  function handeAddTodo (todo) {
      setTodos((prev) => {
        let result = prev.concat()
  
        result.push(todo)
  
        return result
      })
      setInputValue('')
  }

  const getAllTodos = async () => {
    try {
      await fetch('http://localhost:3080/todo')
      .then(res => res.json())
      .then(r => setTodos(r))
    } catch (e) {
      console.log(e)
    }
  }

  const sayHello = async () => {
    try {
      await fetch('http://localhost:3080/hello')
      .then(res => res.json())
      .then(r => console.log(r))
    } catch (e) {
      console.log(e)
    }
  }

  const createNewTodo = async (title) => {
    try {
      await fetch('http://localhost:3080/todo/create', {
        method: 'POST',
        body: JSON.stringify({title, closed: false})})
      .then(res => res.json())
      .then(r => handeAddTodo(r))
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
      <button onClick={() => createNewTodo(inputValue)}>Send</button>
      {todos.map(el => {
        return <div className={el.closed ? 'closed' : 'opened'} key={el._id}>{el.title}</div>
      })}
      <button onClick={() => getAllTodos()}>reload</button>
    </div>
  );
}

export default App;
