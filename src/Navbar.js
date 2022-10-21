import React, { useEffect, useState } from 'react'
import './Navbar.css';
import { MdArrowDropDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"} navbar-container`}>
            <img
                alt="Logo"
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
            <button className="button-tertiary button-tertiary-active">Inicio</button>
            <button className="button-tertiary">Series</button>
            <button className="button-tertiary">Películas</button>
            <button className="button-tertiary">Novedades populares</button>
            <button className="button-tertiary">Mi lista</button>

            <div className="spacer"></div>

            <BsSearch />
            <button className="button-tertiary">Niños</button>
            <BsFillBellFill />

            <img
                className='profile-image'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
            <MdArrowDropDown />

        </div>
    )

}

export default Navbar