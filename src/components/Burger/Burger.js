import React from 'react';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';


const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredient).map(igKey =>{
        return [...Array(props.ingredient[igKey])].map((_,i) =>{
            return <BurgerIngredients key={igKey + i} type={igKey} />
        } );
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]);




    if(transformedIngredients.length === 0){
        transformedIngredients =<p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type ="bread-bottom"/>
        </div>
    );
}

export default Burger;