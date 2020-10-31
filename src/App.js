import React, { Component } from 'react'
import Customer from './Customer'
import axios from 'axios'

class App extends Component{

  state = {
    orders: []
  }

  componentDidMount(){
    axios.get('https:indapi.kumba.io/webdev/assignment')
      .then( res => {
        this.setState({
          orders : res.data
        })
      })
  }
render(){
  const { orders } = this.state;
  const orderList = orders.items ? 
    (orders.items.map( (order, i) => {
            return(
              <div className='order' key={i}>
                 <div className='order-content'>
                   <h1 className='order-name'>{order.name}</h1>
                   <div className='order-name'>CATEGORY: {order.category}</div>
                   <div className='order-name'>PRICE: {order.currency} {order.price}</div>
                   <div className='order-name'>TAX: {order.tax_pct} % </div>
                   <div className='order-name'>QUANTITY: {order.quantity}</div>
                 </div>
                  </div>)
            })):
      <div className='load'>
        <div className='loader'> </div> 
        <h1>Please wait.....</h1>
      </div>


  return (
  <div className="container">
     <nav>
        <div className='navbar'>Fast Food Station</div>
      </nav>
      <div>
      {orders.user &&  <Customer user ={orders.user }/>}
      </div>
      <div className='items'>
            {orderList}
        </div>
      <div className='footer-container'>
      <div className='footer-heading'>{orders.restaurant && orders.restaurant.name }</div>
      <div className='footer-state'>{orders.restaurant && orders.restaurant.state},{orders.restaurant && orders.restaurant.city}</div>
      <div className='footer-street'>{orders.restaurant && orders.restaurant.street },{orders.restaurant && orders.restaurant.zipcode}.</div>
      </div>
    </div>
  )
 }
}

export default App;
