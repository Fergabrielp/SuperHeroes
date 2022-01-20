import React from 'react'
import Titulo from '../assets/titulo.png'

const Header = () => {
    return (
        <div className='container-fluid bg-dark'>
            <img src={Titulo} alt="Super Heroes" className='img-fluid mx-auto d-block p-3' width='300' />
        </div>
    )
}

export default Header
