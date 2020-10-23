import React from 'react';
import Todoitem from "./Todoitem"


const styles = {
  list: {
    listStyle: "none",
    textAlign: "start",
    fontWeight: 'bold',
    fontSize: '24px'
  }
}

export default function Todolist(props) {
  return (
    <ul style={styles.list}>
      {
        props.todo.map((elem, index) => {
          return <Todoitem todo={elem} key={elem.id} index={index} onChange={props.toggler} />
        })}
    </ul>
  )

}