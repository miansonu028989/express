import React, { Component } from 'react'
import  nav  from "./navStyle.module.css";
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
                        <li className={`${nav.li}`}><a href={``} className={`${nav.a}`}>About Me</a></li>
                        <li className={`${nav.li}`}><a href={``} className={`${nav.a}`}>contect Me</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}