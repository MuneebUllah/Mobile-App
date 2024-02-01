import React, { useContext } from 'react'
import {Item} from './Item'
import Scrollbars from 'react-custom-scrollbars-2'
import { ContextCart } from './Mbl'
export default function CartContext() {
    const {data,clearCart,quantity} = useContext(ContextCart);
    const totalQuantity=()=>{
        
    }
  return (
    <div>
       <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' className='arrow-icon'/>
            <h3>Continue Shopping</h3>
        </div> 
        <div className='cart-icon '>
            <img src='./images/cart.png' />
            <p>{quantity}</p>
        </div>
    </header>
    <section className='main-cart-section'>
        
            <h1>Shopping Cart</h1>
            <p className='total-items'>You have  <span>7 </span> items in shopping cart</p>
        
        <div className='cart-items  '>
            <div className='cart-items-container'>
                <Scrollbars>
                {
                    data.map((curItem)=>{
                        return <Item key={curItem.id} {...curItem}/>
                    })
                }
                </Scrollbars>
            </div>
            <div className='card-total '>
                <h3>Cart Total:</h3>
            <button>Check Out</button>
            <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
            </div>

        </div>
    </section>
    </div>
  )
}
