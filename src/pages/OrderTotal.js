import React from 'react';

const OrderTotal = (props) => {
    
   const getTotalPriceandTax = (arr) => {
        let totalPrice = 0;
        let totalTax = 0;

        arr.map( a => {
          let price = a.price * a.quantity;
          let tax_pct = a.tax_pct * a.quantity;
            totalPrice = totalPrice + price;
            totalTax = totalTax + tax_pct;
        })

        return {
            totalPrice,
            totalTax
        }
    }

    const total = getTotalPriceandTax(props.items)

    return (
        <div>
            <div className='total-price'>
                <div className='price'>
                    <h2>Total Price: <span>INR {total.totalPrice}</span></h2>
                    <h2>Total Tax :<span> {total.totalTax}% </span></h2>
                </div>
            </div>
        </div>
    );
};

export default OrderTotal;