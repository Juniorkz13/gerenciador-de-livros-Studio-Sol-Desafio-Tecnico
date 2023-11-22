// src/Footer.js
import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaPlus, FaSearch, FaHeart } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/'>
                <FaHome />
            </Link>
            <FaPlus />
            <FaSearch />
            <FaHeart />
        </div>
    )
}

export default Footer
