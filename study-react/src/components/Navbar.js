import React,{Fragment} from 'react'
import {Navlink} from 'react-router-dom' 

export const Navbar =()=>{
  return(
  <nav className="navbar  navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Мои заметки
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <Navlink className="nav-link" to='/' exact>Главная</Navlink>
      </li>
      <li className="nav-item">
        <Navlink className="nav-link" to='/about'>Заметки</Navlink>
      </li>
 
</ul>
  </nav>
  )
}
