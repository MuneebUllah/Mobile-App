import React, { createContext, useReducer } from 'react'
import "./cart.css"
import CartContext from './CartContext'
import { products } from './products'
import {reducer} from './Reducer'
export const ContextCart =  createContext();

const initalState ={
    data: products,
    totalAmount : 0,
    totalItem: 0
}
export default function Cart() {
    const [state,dispatch] = useReducer(reducer,initalState)
   const removeItem=(id)=>{
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id
    })
   }
   const clearCart = ()=>{
    return dispatch({type:"CLEAR_CART"})
   }
   const increment = (id)=>{
    return dispatch({
      type:"INCREMENT",
      payload:id
    })
   }
   const decrement = (id)=>{
    return dispatch({
      type:"DECREMENT",
      payload:id
    })
   }
  return (
    <>
    <ContextCart.Provider value={{...state,removeItem,clearCart,increment, decrement}}>
        <CartContext/>
    </ContextCart.Provider>
    </>
  )
}
