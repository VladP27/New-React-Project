import React from 'react'
import './Header.css'
import logo from './logo.png'

export default function Header() {
    return(
    <div className='Header'>
        <img src={logo} alt="Logo" />
        <h1>Suchmaschinator</h1>
    </div>
    )
}