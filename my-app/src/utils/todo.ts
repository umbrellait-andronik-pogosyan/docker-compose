import ITodo from '../interfaces/todo'

const URL = process.env.REACT_APP_API_URL


export const getAllTodos = async (callback: (arg: ITodo[]) => void) => {
    try {
      await fetch(`${URL}/todo`)
      .then(res => res.json())
      .then(r => callback(r))
    } catch (e) {
      console.log(e)
    }
}

export const createNewTodo = async (title: string, callback: (arg: ITodo) => void) => {
    try {
      await fetch(`${URL}/todo/create`, {
        method: 'POST',
        body: JSON.stringify({title, closed: false})})
      .then(res => res.json())
      .then(r => callback(r))
    } catch (e) {
      console.log(e)
    }
}