import React, { Component } from 'react';
import dataContext from '../../context/dataContext';

import "./cartTotal.css";


class CartTotal extends Component {
    static contextType = dataContext;
    state = { 
        total: 0,
     }
    render() { 
        
        return (
            <div className="cartTotal">
                 <label className="price">Total Price: ${this.getTotal()}</label>
            </div>
        )
    }
    getTotal = () => {
        let total = 0;
 
        for(let i = 0; i<this.context.cart.length; i++) {
            let item = this.context.cart[i];
            total += (item.price * item.quantity);
        }
        
        return total;
    }

    handleTotalChange = (total) => {
        this.setState({total : total})
    };
    
}

export default CartTotal