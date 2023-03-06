import React from "react";
import "./Navigation.css";
import { useState, useEffect } from "react";

function Navigation() {
    const [ToggleNav, setToggleNav] = useState(false);
    const [seeNav, setSeenav ] = useState(false);


    const toggleNav = () => {
        setToggleNav(!ToggleNav);
    };

    const showNav = () => {
        setSeenav(!seeNav);
    };

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setToggleNav(true);
            setSeenav(false);
        } else {
            setToggleNav(false);
        }
    }
    useEffect(() => {

        window.addEventListener("resize", () => {
            handleResize();
            if (condition) {
                
            }
        });
        return () => {
            window.removeEventListener("resize", handleResize);

            }
        


    }, []);



    return (
        <header className="navigation">

            {!ToggleNav && (
                <div className={seeNav ? "navContent nav--on": "navContent nav--off"}>
                    <ul>

                        <li><a href="#">SHO</a> </li>
                        <li><a href="#">collection</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">collection</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>

            </div>
            )}

        {ToggleNav && (
            <nav>
                <a href="#">SHO</a>
                <a href="#">collection</a>
                <a href="#">about</a>
                <a href="#">contacts</a>
            </nav>
            )
        }

            <h1>Navigation</h1>

            <div class="icn-container">

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0H24V24H0z"/>
                        <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/>
                    </svg>
                </a>

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path d="M7 8V6a5 5 0 1 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3zm0 2H5v10h14V10h-2v2h-2v-2H9v2H7v-2zm2-2h6V6a3 3 0 0 0-6 0v2z"/>
                    </svg>
                </a>
            </div>
            {!ToggleNav && (
            <div className="responsivNav">
                    <button onClick={showNav}> MENU</button>
            </div>
                )}
        </header>
            

    );
}
export default Navigation;
