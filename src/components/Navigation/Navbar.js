import React, { Component } from 'react'
import  nav  from "./navStyle.module.css";
import About from '../About/AboutMe';
import AboutMe from '../About/AboutMe';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`${nav.nav}`}>
                    <div className={`${nav.navbar}`}>
                        <h2>
                            Navbar
                        </h2>
                    </div>
                    <ul className={`${nav.ul}`}>
                        <Link to="/about">
                            <li className={`${nav.li}`}><a href={`${About}`} className={`${nav.a}`}>About Me</a></li>
                        </Link>
                        <Link to='/Contects'>
                            <li className={`${nav.li}`}><a href={`${About}`} className={`${nav.a}`}>Contect Me</a></li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}