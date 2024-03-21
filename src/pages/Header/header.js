import React, { useRef } from "react";
import { useState } from 'react';
import { gsap } from "gsap";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo192.png'; // Import the PNG logo
import './header.scss';

function Header() {
    const navigate = useNavigate();
    const elSocials = useRef();
    const tlMenu = useRef();
    const [checked, setChecked] = useState(false);

    const animeOne = () => {
        tlMenu.current = gsap.timeline()
        .fromTo(s(".menu-one"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-two"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-three"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-four"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
        .fromTo(s(".menu-five"), {x: -20, opacity: 0}, {
            x: 0, opacity: 1, duration: .7, ease: "powerIn", transformOrigin: 'center center', stagger: 0.1
          })
    }

    const triggerAnime = () => {
        if (checked) {
            return animeOne();
        } else if (!checked) {
            return null;
        }
        return null;
    }

    const check = () => {
        return checked = !checked;
    }

    const nav = () => {
        navigate('/'); // Use navigate function to navigate to "/"
    }

    return (
        <div className="header">
            <div className="logo" onClick={nav}>
                <img src={logo} alt="Logo" title="Logo" /> {/* Use the PNG logo */}
            </div>

            <div className="menu-toggle">
                <input type="checkbox" className="nav__checkbox" id="nav-toggle" checked={checked} onChange={e => setChecked(e.target.checked)} />
                <label htmlFor="nav-toggle" className="nav__button">
                    <span className="nav__icon">&nbsp;</span>
                </label>
                <div className="navigation" ref={elSocials}>
                    <div className="large_menu">
                        <div className="small_menu">
                            <ul className="menu-list">
                                <li className="menu-one"><NavLink className="nav-link" onClick={check} to="/">Home</NavLink></li>
                                <li className="menu-two"><NavLink className="nav-link" onClick={check} to="/work">Work</NavLink></li>
                                <li className="menu-four"><a className="nav-link" href="https://drive.google.com/file/d/1eIAbMCunwz_sdQx6MkNihJ9RV2idIxyP/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                                <li className="menu-five"><a className="nav-link" href="mailto:hkhankor@gmail.com" target="_blank" rel="noopener noreferrer">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
