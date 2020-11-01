import React from 'react';
import { Link } from 'react-router-dom'


const Orderlist = (props) => {
    const data = props.location.data;
    const { items } = data;

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
        <div className='items'>
            <Link to="/"> Back </Link>
            {orderList}
       </div>
    )
}

export default Orderlist;