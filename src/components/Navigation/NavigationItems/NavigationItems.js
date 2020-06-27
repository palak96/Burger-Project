import React from 'react';
import NavItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navItems =(props) =>{
    return(
        <ul className={classes.NavigationItems}>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    )
    
}

export default navItems;