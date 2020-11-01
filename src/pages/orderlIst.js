import React from 'react';
import OrderTotal from './OrderTotal';
import { Link } from 'react-router-dom'



const Orderlist = (props) => {
    const data = props.location.data;
    const { items , restaurant } = data;
    const orderList = items.map((order, i) => {
        return (
            <div className='order' key={i}>
                <div className='order-content'>
                    <h1 className='order-name'>{order.name}</h1>
                    <div className='order-name'>CATEGORY: {order.category}</div>
                    <div className='order-name'>PRICE: {order.currency} {order.price}</div>
                    <div className='order-name'>TAX: {order.tax_pct} % </div>
                    <div className='order-name'>QUANTITY: {order.quantity}</div>
                </div>
            </div>)
    })
      
    return (
        <div>
            <nav className='nav'>
                <div className='bar'>Fast Food Station
                <span><Link to="/" className='home-link'> home</Link></span>
                </div>
            </nav>
            <div className='items'>
                {orderList}
            </div>
            <OrderTotal items={items} />
            <div className='footer-container'>
                <div className='footer-heading'>{restaurant && restaurant.name}</div>
                <div className='footer-state'>{restaurant && restaurant.state},{restaurant && restaurant.city}</div>
                <div className='footer-street'>{restaurant && restaurant.street},{restaurant && restaurant.zipcode}.</div>
            </div>
        </div>
    )
}

export default Orderlist;