import React from 'react'

function Navbar() {
    return (
        <>
            <nav className='navbar container d-flex justify-content-between p-2'>
                <div className="left">
                    <img src="./images/brand_logo.png" alt="" />
                </div>
                <div className="center">
                    <a href="">MENU</a>
                    <a href="">LOCATION</a>
                    <a href="">ABOUT</a>
                    <a href="">CONTACT</a>
                </div>
                <div className="right">
                    <button className='px-3 py-1 btn btn-danger rounded-0'>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar