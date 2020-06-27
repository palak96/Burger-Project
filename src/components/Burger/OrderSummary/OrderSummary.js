import React,{Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log('[OrderSummary.js] componentDidUpdate');
    }

    render(){

        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>)
        });

        return(
            <Auxiliary>
            <h3>Our Order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Price of the Burger : {this.props.total.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.continue}>CONTINUE </Button>
        </Auxiliary>
        )
    }
}

export default OrderSummary;