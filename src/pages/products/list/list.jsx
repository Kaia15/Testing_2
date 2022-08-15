import React from 'react'
import { useState, useEffect } from 'react'
// import Button from '../../../common/button/button'
import Product from '../../product/product'
import { Link } from 'react-router-dom'

const List = ({list}) => {
    // console.log(list)
    const [openProduct, setOpenProduct] = useState(false)
    return (
        <div className='items' style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", margin: "20px 0px"}}>
            {list.length > 0 && list.map((pr,index) => {
                return (
                    <div className='d-flex flex-column'>
                        <img src={pr.model} style={{ width: "70%", height: "70%", borderRadius: "4px",  }} />
                        <p style = {{margin: "10px"}}> {pr.title} </p>
                        <div className="options-btn" style = {{display: "flex", flexDirection: "column"}}>
                            <button 
                            style = {{backgroundColor: "white", border: "1px solid", borderRadius: "4px", width: "100px", height: "40px"}}
                            onClick = {() => <Product id = {index} />}
                            > See more </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default List