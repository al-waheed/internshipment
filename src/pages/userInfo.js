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
  render() {
    const { orders } = this.state;
    return (
      <div className="container">
        <nav>
          <div className='navbar'>Fast Food Station</div>
        </nav>

        {
          orders.items ? (<div> {orders.user && <Customer user={orders.user} />}
            <div className='view'>
              <Link to={{ pathname: "/orders", data: orders }} className='view-orders'> View Kumba Orders</Link>
            </div>
          </div>) : (<div className='load'>
            <div className='loader'> </div>
            <h1>Please wait.....</h1>
          </div>)
        }
      </div>
    )
  }
}

export default UserInfo;
