import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const buildControls = (props) =>{

    const controls =[
        {label :'Salad' ,type :'salad'},
        {label :'Meat' ,type :'meat'},
        {label :'Bacon' ,type :'bacon'},
        {label :'Cheese' ,type :'cheese'}
    ]

    return(
        <div className = {classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
            {controls.map(ctrl =>{
                return <BuildControl key ={ctrl.label} label ={ctrl.label} 
                added={() =>{props.ingredientsAdded(ctrl.type) }} 
                removed={() =>{props.ingredientsRemoved(ctrl.type)}}
                disabled ={props.disabled[ctrl.type]}/>
            })}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick ={props.ordered}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;