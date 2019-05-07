import React from 'react'
import {Link} from 'react-router-dom'
import './SideDrawer.scss'

const sideDrawer = (props) =>{
    let sideDrawerClasses = 'side-drawer'
    if(props.show){
        sideDrawerClasses = 'side-drawer open'
    }

    return(
        <nav className = {sideDrawerClasses}>
            <ul>
            <li><Link to ="/">List produktów</Link></li>
            <li><Link to ="/cart">Koszyk</Link></li>
            </ul>
        </nav>
    )
}

export default sideDrawer 