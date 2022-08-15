import React from 'react'
import CheckboxStyle from './checkbox.module.css'

const CheckBox = ({ categoryIndex, handleCategory, categories }) => {
    return (
        <div className="category">
            <p className={CheckboxStyle.categoryP}> Category </p>
            {categories.map((category, index) => {
            return (
                <div className="form-check" key={index}>
                        <input
                            id="category"
                            type="checkbox"
                            
                            onChange={() => handleCategory(index)}
                        />
                        <label htmlFor="category"> {category} </label>
                </div>
            )
            })}
        </div>
    )
}

export default CheckBox