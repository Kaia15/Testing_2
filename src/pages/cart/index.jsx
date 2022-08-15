import React from 'react'
import { items } from '../../data/list'
import Item from './itemcart/itemcart'
import ClearCart from './clearcartbutton/clearcart'
import Select from './finalcart/select'
import LeftComponents from '../../components/navigation/leftcomponents'

const RenderCart = ({cart, index, check, handleDelete, handleClearCart, selectCart}) => {
    return (
    <div>
        {cart.map((item,i) => {
            let id = item.id
            let srcItem = items[id]
            return (
            <Item key = {id} 
            id = {id} 
            srcItem = {srcItem} 
            handleDelete = {handleDelete} 
            item = {item} 
            selectCart = {selectCart} 
            index = {index}
            check = {check}/>
            )
        })}
        <Select cart = {cart} check = {check} />
        <ClearCart handleClearCart={handleClearCart}/>
    </div>
    )
}

export default RenderCart