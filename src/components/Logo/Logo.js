import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.css';

const Logo = (props) =>{
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="burger-logo"/>
        </div>
    )
}

export default Logo;