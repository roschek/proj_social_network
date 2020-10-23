import React, {useContext} from 'react'
import Context from '../Context'



const styles = {
  li: {
    border: '1px solid black',
    padding: '10px',
    borderRadius: '10px',
    marginBottom: '20px',
    display: 'flex',
    position: 'relative'

  },
  span: {
    marginRight: '10px',
    textAlign: 'start'
  },
  todoitem: {
    marginLeft: '20px'

  },
  button: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    cursor: 'pointer',

  },
  label: {
    cursor: 'pointer',
    fontSize: '12px',
    textAlign: 'center',
    border: '1px solid lavender',
    padding: '5px',
    borderRadius: '10px'
  }
}

export default function Todoitem({ todo, index, onChange }) {
  const {removeTodo} = useContext(Context)
  const classes = []

  if (todo.completed){
    classes.push('done')
  }

  return (
    <li style={styles.li} className = {classes.join(' ')}>
      <label style={styles.label}>
        <input type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>Выполнено
      </label>
      <div style={styles.todoitem}>
        <span style={styles.span}>{index + 1}</span>
        <span>{todo.title}</span>
      </div>
      <button style={styles.button} onClick={()=>removeTodo(todo.id)}><svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x-octagon" fill="red" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
      </svg></button>
    </li>
  )
}