import React, { useEffect, useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import toast, { Toaster } from 'react-hot-toast'
import './Navbar.css'
import cooking from './cooking.png'

function Navbar() {
    const [user, setUser] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const logoutbt = async () => {
        localStorage.clear()
        toast.success('Logged out Successfully')
        setTimeout(() => {
            window.location.href = '/login'
        }, 3000)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        setUser(currentUser)
    }, [])


    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 rounded nav-c" >
                <a className="navbar-brand web-nm" href="#"><img src={cooking} alt='linkImage' height={'30px'}/> Savory Safe</a>
                <button className="navbar-toggler" type="button" onClick={toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ham-nav ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav nav-sec">
                        <li className="nav-item">
                            <a className="nav-link web-direc" href="/">Home</a>
                        </li>
                        {
                            user ?
                                <li className="nav-item">
                                    <span className='nav-link logot web-direc' onClick={logoutbt}>
                                        Logout
                                    </span>
                                </li>
                                :
                                <li className="nav-item">
                                    <a className="nav-link web-direc" href="/login" >Login</a>
                                </li>
                        }
                        <li className="nav-item">
                            <a className="nav-link web-direc" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Toaster />
        </div>
    )
}

export default Navbar