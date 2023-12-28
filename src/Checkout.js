import './Checkout.css'
import React from 'react'


function Checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className="checkout__ad"src="https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SS250_.jpg"/>

        <div>
            <h2 className='checkout__title'>Your shopping Basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
       your items
      </div>

    </div>
  )

}

export default Checkout
