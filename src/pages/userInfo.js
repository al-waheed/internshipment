import React, { Component } from 'react'
import Customer from './../Customer'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserInfo extends Component{

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

 return (
   <div className="container">
     <nav>
       <div className='navbar'>Fast Food Station</div>
     </nav>

     {orders ? <div> {orders.user && <Customer user={orders.user} />}
         <Link to={{ pathname: "/orders", data: orders }}> View Orders</Link>
       </div> : 
         (<div className='load'>
           <div className='loader'> </div>
           <h1>Please wait.....</h1>
         </div>)
     }
     <div className='footer-container'>
       <div className='footer-heading'>{orders.restaurant && orders.restaurant.name}</div>
       <div className='footer-state'>{orders.restaurant && orders.restaurant.state},{orders.restaurant && orders.restaurant.city}</div>
       <div className='footer-street'>{orders.restaurant && orders.restaurant.street},{orders.restaurant && orders.restaurant.zipcode}.</div>
     </div>

   </div>
  )
 }
}

export default UserInfo;
