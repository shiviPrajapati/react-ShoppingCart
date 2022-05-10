import React, {Component} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context";
import '../Styles/Home.css'

class Home extends Component {
    static contextType = DataContext;


    render() {
        const { products, addCart } = this.context;
        return (
            <div className="itemdiv">
                {products.map(product => {
                    return (

                        <div className='product' key={product.id}>
                            <div className='imagediv'><img src={product.pic} alt='img' className='image'></img></div>
                            <div className='detail'>
                                <span className='proName'>
                                    <Link className="proLink" to={`product/${product.id}`}>{product.name}</Link>
                                </span>
                                <br></br>
                                <span className='proPrice'> Rs. {product.price}</span>
                                <div className='addBtn'>
                                    <button className='addButton' onClick={() => addCart(product.id)}>Add Item</button>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default Home