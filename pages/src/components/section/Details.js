import React, {Component} from "react";
import { DataContext } from "../context";
import '../Styles/Detail.css';

class Details extends Component{
    static contextType = DataContext;
    
    constructor(){
        super();
        this.state = {
            product: []
        }
    }
    
    
    getProduct = () => {
        if(window.location.pathname.split('/').pop()){
            const res = this.context.products;
            let i = Math.floor(window.location.pathname.split('/').pop())
            let data = res.filter(item => {
                return item.id === i
            })
            this.setState({product: data})
        }    
    }

    componentDidMount(){
        this.getProduct()
    }

    render(){
        const {product} = this.state;
        return(
            <div>
                {
                    product.map(item => {
                        return <div className="details" key={item.id}>
                            <img src={item.pic} alt="img"></img>
                            <h1>{item.name}</h1>
                            <h2>Rs. {item.price}</h2>
                            <span>{item.desc}</span>
                        </div>
                    })                   
                }

            
            </div>
        )
    }

}

export default Details