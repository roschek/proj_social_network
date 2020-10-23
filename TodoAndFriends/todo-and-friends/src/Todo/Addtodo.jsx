import React, { useState } from 'react';

const styles = {
  form: {
    margin: '10px'
  },
  input: {
    margin: '10px',
    padding: '10px',
    border: '1px solid lavender',
    borderRadius: "10px",
    fontSize: '24px'
  },
  submit: {
    margin: '10px',
    padding: '10px',
    border: '1px solid lavender',
    borderRadius: "10px",
    fontSize: '24px',
    cursor: 'pointer'
  }
}
function Addtodo({createPost}) {
  const [value, setValue] = useState('')
  function submitHandler(evt){
    evt.preventDefault()
    if (value.trim()){
      createPost(value)
     
    }
    setValue('')
  }

  return (
    <form action="POST" style={styles.form} onSubmit={submitHandler}>
      <input value={value} type="text" style={styles.input} onChange={evt => setValue(evt.target.value)} />
      <button type="submit" style={styles.submit}>Добавить пост</button>
    </form>
  )
}

export default Addtodo