import React,{ Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICE ={
    meat : 1.3,
    cheese:0.4,
    bacon: 0.7,
    salad: 0.5
};

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        }
       , totalPrice : 4,
       purchasable: false,
       purchasing: false
    }
    
    purchasableBurger(ingredients){
    
        const sum = Object.keys(ingredients)
        .map(igKey =>{
                return ingredients[igKey];
        })
        .reduce((sum,el) =>{
                return sum + el;
        },0);
        this.setState({purchasable: sum > 0})
    }

    purchaseHandler =() =>{
        this.setState({purchasing : true});
    }

    purchaseCanceledHandler =() =>{
        this.setState({purchasing : false});
    }

    purchaseContinueHandler =()=>{
        alert('You continue!');
    }
    addIngredientsHandler =(type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        const upgradeIngredients = {...this.state.ingredients};
        upgradeIngredients[type] = updatedCount;
        const updatedprice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients :upgradeIngredients,totalPrice:updatedprice});
        this.purchasableBurger(upgradeIngredients);
    }
   
    removeIngredientsHandler =(type) =>{
        if(this.state.ingredients[type] === 0){
            return;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const upgradeIngredients = {...this.state.ingredients};
        upgradeIngredients[type] = updatedCount;
        const updatedprice = this.state.totalPrice - INGREDIENT_PRICE[type];
        this.setState({ingredients :upgradeIngredients,totalPrice:updatedprice});
        this.purchasableBurger(upgradeIngredients);
    }


    
    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceledHandler}>
                    <OrderSummary ingredients = {this.state.ingredients} cancel={this.purchaseCanceledHandler}
                    continue={this.purchaseContinueHandler} total={this.state.totalPrice}/>
                </Modal>
                <Burger ingredient ={this.state.ingredients}/>
                <BuildControls ingredientsAdded ={this.addIngredientsHandler}
                ingredientsRemoved = {this.removeIngredientsHandler}
                disabled ={disabledInfo}
                purchasable={this.state.purchasable}
                ordered ={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;