import React from "react"

const styles = {
  nav: {
  width:'100%',
  backgroundColor:'black',
  margin:'0',
  padding:'20px',
  display:'flex',
  justifyContent:'space-between',
  boxSizing:"border-box"
  }
  
}
export default function Header() {
 
  return (
    <nav style = {styles.nav}>
      <a href="#" className="link" >Мои дела</a>
      <a href="#" className="link" >Мои контакты</a>
    </nav>
  )

}