import React, {Component} from "react";
import { DataContext } from "../context";
import '../Styles/GoToCart.css'

class GoToCart extends Component {
    static contextType = DataContext;

    render(){

        const { cart, increase, reduction, removeProduct, getTotal} = this.context;
        if(cart.length === 0 ){
            return <h2>Cart is Empty !</h2>
        }
        else{
            return (
                <div>
                    {
                        cart.map(item => {
                            return  <div className="detailsCart" key={item.id}>
                                        <div className="cartimgdiv">
                                            <img className="cartimage" src={item.pic} alt="img"></img>
                                        </div>
                                        <div className="detaildiv">
                                            <h2>{item.name}</h2>
                                            <span>Rs. {item.price}</span>
                                        </div>
                                        <div className="countdiv">
                                            <div className="amount">
                                                <button className="count" onClick={() => reduction(item.id)}> - </button>
                                                <span>{item.count}</span>
                                                <button className="count" onClick={() => increase(item.id)}> + </button>
                                            </div>
                                            
                                        </div>
                                        <div className="deletediv">
                                            <button className="delete" onClick={() => removeProduct(item.id)}> X </button>
                                        </div>
                                    </div>
                        })
                    }
                    <button className="orderbtn" onClick={() => getTotal()}>Order</button>
                </div>
            )
        }
    }
}

export default GoToCart