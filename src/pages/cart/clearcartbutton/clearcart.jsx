import React from 'react'

const ClearCart = ({cart, handleClearCart}) => {
    return (
        <div>
            <button
            onClick = {handleClearCart}> Clear Cart </button>
        </div>
    )
}

export default ClearCart