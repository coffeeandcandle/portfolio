import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Footer({ color, bg }) {
    return (

        <footer className='footerMain' >
            <div className='container'>
                <p className="copyRight text-center"><a href="#">Terms and Conditions</a> | <Link to="/privacypolicy">Privacy
                    Policy</Link> | Copyright &copy; 2023 <a href="index.html">Coffee & Candle</a> All rights
                    reserved.
                </p>
            </div>
        <Outlet />
        </footer>
    )
}

export default Footer
