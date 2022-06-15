export const getAllTodos = async (callback) => {
    try {
      await fetch('http://localhost:3080/todo')
      .then(res => res.json())
      .then(r => callback(r))
    } catch (e) {
      console.log(e)
    }
}

export const createNewTodo = async (title, callback) => {
    try {
      await fetch('http://localhost:3080/todo/create', {
        method: 'POST',
        body: JSON.stringify({title, closed: false})})
      .then(res => res.json())
      .then(r => callback(r))
    } catch (e) {
      console.log(e)
    }
}