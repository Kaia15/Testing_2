import React from 'react'

const Select = ({cart, check}) => {
    let total = 0
    let itemSelect = cart.filter((item) => {return check.indexOf(item['id']) !== -1})
    itemSelect.map(item => {
        total += item['subtotal']
    })
    return (
    <div>
        {itemSelect.map(item => {
            return (
            <div style = {{display: "flex", flexDirection: "row"}}>
            <li style = {{margin: "0px 20px"}}> {item.id} </li>
            <li style = {{margin: "0px 20px"}}> {item.subtotal}</li>
            </div>
            )
        })}
        <p> Total of order: {total} </p>
    </div>
    )
}

export default Select