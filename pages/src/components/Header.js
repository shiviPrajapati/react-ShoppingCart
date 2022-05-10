import React, {Component} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./context";
import './Styles/Header.css'


class Header extends Component{
    static contextType = DataContext;

    render(){
        return (
            <header>
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='link' to='/GoToCart'>Go To Cart</Link>
                        </li>
                        <li>
                            <Link className='link' to='/Order'>Order</Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header