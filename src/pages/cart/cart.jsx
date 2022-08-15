import React from 'react'
import { useState, useReducer, useEffect } from 'react'
import { setIndex, addIndex } from '../cart/actions/actions'
import reducer, {initState} from '../cart/reducer/reducer'
import { items } from '../../data/list'
import { StoreContext } from '../../context/context'
import { useContext } from 'react'
import RenderCart from './index'


const Cart = () => {
    const {cart, setCart} = useContext(StoreContext)
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(cart)
    const { index, check } = state
    // console.log(index)
    // console.log(check)
    const handleDelete = (id) => {
        setCart(prev => {
            let afterDelete = prev.filter((item) => item['id'] !== id)
            return afterDelete
        })
    }
    const handleClearCart = () => {
        setCart([])
    }
    const selectCart = (id) => {
        dispatch(setIndex(id))
        dispatch(addIndex(id))
    }
    return (
    <RenderCart 
    cart = {cart} 
    handleDelete = {handleDelete} 
    handleClearCart = {handleClearCart}
    selectCart = {selectCart}
    index = {index}
    check = {check}/>
    )
}

export default Cart