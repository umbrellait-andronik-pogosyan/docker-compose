import './App.css';
import { useState, useEffect } from 'react';
import { getAllTodos, createNewTodo } from './utils/todo';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  function handleAddTodo (todo) {
      setTodos((prev) => {
        let result = prev.concat()
  
        result.push(todo)
  
        return result
      })
      setInputValue('')
  }

  useEffect(() => {
    getAllTodos(setTodos)
  }, [])

  return (
    <div className="App">
      <input
        placeholder='yout task'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => createNewTodo(inputValue, handleAddTodo)}>Send</button>
      {todos.map(el => {
        return <div className={el.closed ? 'closed' : 'opened'} key={el._id}>{el.title}</div>
      })}
      <button onClick={() => getAllTodos(setTodos)}>reload</button>
    </div>
  );
}

export default App;
