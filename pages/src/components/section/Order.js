import React, { Component } from "react";
import { DataContext } from "../context";
import '../Styles/Order.css'


class Order extends Component {
    static contextType = DataContext;
    render() {
        if (!(Object.keys(localStorage))) {
            return <h2>No Item !</h2>
        }
        else {
            return (

                <div className="order">
                    <div className="heading">Ordered Items</div>
                    {
                        Object.keys(localStorage).map(item => {
                            let value = JSON.parse(localStorage.getItem(item));
                            let total = 0;
                            return <div className="orderdetails" key={item}>
                                <div><h3>Order Id: {item}</h3></div>
                                <div>
                                    {
                                        value.map((orderitem) => {
                                            total = total + (orderitem.price * orderitem.count);
                                            return <div className="orderItem" key={orderitem.id}>
                                                <span>:- {orderitem.name}</span>
                                                <span>Qty: {orderitem.count}</span>
                                                <span>Rs: {orderitem.price}/-</span>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="total">Total Amount : {total}/-</div>
                            </div>
                        })
                    }
                </div>
            )
        }
    }
}

export default Order