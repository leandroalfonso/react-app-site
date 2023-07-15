import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container'>
        <nav>
            <p style={{color:'#fff'}}>Logo</p>
            <ul>
                <li><a>Home</a></li>
                <li><a>Contatos</a></li>
                <li><a>Carrinho</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar