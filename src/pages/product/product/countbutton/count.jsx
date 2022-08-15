import React from 'react'
import CountStyle from './count.module.css'

const Count = ({quantity, handlePlus, handleMinus, handleSubTotal}) => {
    // console.log(typeof quantity)
    // console.log(quantity)
    return (
    <div className={CountStyle.count_container}>
        <button
        className={CountStyle.button}
        onClick = {handlePlus}>
        +
        </button>
        <p> {quantity} </p>
        <button
        className={CountStyle.button}
        onClick = {handleMinus}> 
        -
        </button>
    </div>
    )
}

export default Count