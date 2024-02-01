import React from 'react'
import { useContext } from 'react'
import { ContextCart } from './Mbl'

export const Item=({id,img,title,description,price,quantity})=> {
 const {removeItem,increment,decrement}=useContext(ContextCart)
  return (
    <div>
       <div className='items-info'>
                <div className='product-img'>
                <img src={img} />
                </div>
                <div className='title'>
                    <h2 >{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='add-minus-quantity'>
                <i className="fa-solid fa-minus"onClick={()=>decrement(id)}/>
                    <input type={"text"} placeholder={quantity}/>
                    <i className="fa-solid fa-plus" onClick={()=>increment(id)}/>
                </div>
                <div className='price'><h3>RS.{price}</h3></div>
                <div className='remove-item '>
                <i className="fa-solid fa-trash-alt" onClick={()=>removeItem(id)}/>
                </div>
            </div>
            <hr/>
    </div>
  )
}
