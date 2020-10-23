import React, { useEffect } from 'react';
import Todolist from './Todo/Todolist'
import Context from './Context';
import Addtodo from './Todo/Addtodo'

function App() {
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      completed: false,
      title: 'выгулять собаку'
    },
    {
      id: 2,
      completed: false,
      title: 'купить пива'
    },
    {
      id: 3,
      completed: false,
      title: 'потанцевать'
    }
  ])
/*
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res =>res.json())
    .then(todoo =>{setTodo(todo)})
  })*/

  const styles = {
    p: {
      fontSize: "24px",
      fontWeight: 'bold'
    }
  }

  function toggler(id) {
    setTodo(todo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  function removeTodo(id) {
    setTodo(todo.filter(todo => todo.id !== id))
  }

  function addTodo(text) {
    
    setTodo(todo.concat([
      {
        title:text,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Список дел</h1>
        <Addtodo createPost={addTodo} />
        {todo.length ? <Todolist todo={todo} toggler={toggler} /> : <p style={styles.p}> У вас пока нет дел</p>}
      </div>
    </Context.Provider>
  );
}


export default App;
