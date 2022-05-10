import React, {Component} from 'react';

class DataProvider extends Component{
    constructor() {
        super()
        this.state = {
            products: [],
            cart: []
        };
    }



    componentDidMount(){
        fetch('products.json').then((res) =>{
         return res.json()
        }).then((data) => {
            this.setState({
                products: data,
            } )
        })
    }


    addCart = (id) => {
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            this.setState({cart: [...cart,...data]}, () =>{
                console.log(this.state.cart)
              })
        }
    };


    reduction = (id )=>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count=1 : item.count-=item.count-1};
            }
        )
        this.setState({cart: cart});
    };

    increase =(id) =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});

    };

    removeProduct = id => {
        const { cart } = this.state;
        cart.forEach((item, index) => {
            if (item.id === id) {
                cart.splice(index, 1)
            }
        })
        this.setState({ cart: cart });
    };


    getTotal = ()=>{
        const{cart} = this.state;
        let key = Math.floor((Math.random()*1000)+1);
        localStorage.setItem(key, JSON.stringify(cart))
        this.setState({cart: []});      
    };
    

    render() {
        const{cart, products} = this.state;
        const {getTotal, addCart, reduction, increase, removeProduct} = this;

        return (
            <DataContext.Provider 
                value={{getTotal, products, addCart, cart, reduction, increase, removeProduct}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }


}

export const DataContext = React.createContext();
export default DataProvider