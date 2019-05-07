import React from 'react'
import {Link} from 'react-router-dom'
import HamburgerBtn from '../SideDrawer/HamburgerBtn'
import './Toolbar.scss'


const toolbar = (props) => {

    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className = "toolbar__toggle-button">
                    <HamburgerBtn clicked={props.hamburgerClicked} />
                </div>
                <div className="toolbar__logo"><a href="/">LOGO</a></div>
                <div className="space"></div>
                <div className="toolbar__navigation-items">
                    <ul>
                        <li><Link to ="/">List produktów</Link></li>
                        <li><Link to ="/cart">Koszyk</Link></li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default toolbar