import React, { useState } from "react";
import "./header.css";
const Header = () => {
    // ========Toggle Menu========
    const[Toggle, showMenu] = React.useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Hrithik</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                        <a href="#home" className="nav_link active-link">
                            <i className="uil uil-house-user nav__icon"></i> Home
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#projects" className="nav_link active-link">
                            <i className="uil uil-atom nav__icon"></i> Projects
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#skills" className="nav_link active-link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#about" className="nav_link active-link">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#contact" className="nav_link active-link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header