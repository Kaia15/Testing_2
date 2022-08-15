import React from 'react';

const LeftComponents = () => {
    const components = ["HOME", "ABOUT", "PRODUCTS", "CONTACT", "CART"]
    return (
        <div style = {{display: "flex", flexDirection: "row"}}>
            {components.map((compo, index) => {
                return (
                <li style = {{listStyleType: "none", margin: "30px"}} key = {index}> {compo} </li>
                )
            })}
        </div>
    )
}

export default LeftComponents