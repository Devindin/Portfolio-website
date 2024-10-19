import React, { useState, useEffect } from "react";
import mainCSS from '../Main/Main.module.css';

function Main() {
    const [theme, setTheme] = useState('Light'); // Use state to track theme

    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', theme); // Apply the theme when it changes
    }, [theme]); // Watch the theme state

    const toggleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark'); // Change to Dark mode
        } else {
            setTheme('Light'); // Change to Light mode
        }
    };

    return (
        <>
            <div  className={mainCSS.navbar}>
                <ul>
                    <li><a href="#"><span>Home</span><i className="ri-home-line"></i></a></li>
                    <li><a href="#about"><span>About Me</span><i className="ri-user-line"></i></a></li>
                    <li><a href="#portfolio"><span>Portfolio</span><i className="ri-user-4-line"></i></a></li>
                    <li><a href="#resume"><span>Resume</span><i className="ri-file-list-line"></i></a></li>
                    <li><a href="#contact"><span>Contact</span><i className="ri-contacts-book-line"></i></a></li>
                    <li id={mainCSS.nav_ThemeBtn}  onClick={toggleTheme}>
                        <i className={`ri-${theme === 'Light' ? 'sun' : 'sun'}-line`} onClick={toggleTheme}></i>
                    </li>
                </ul>
                <div className={mainCSS.navBtns}>
                    <i className={`ri-${theme === 'Light' ? 'sun' : 'sun'}-line`} onClick={toggleTheme}></i>
                    <button>Let's Talk</button>
                </div>
            </div>
        </>
    );
}

export default Main;
