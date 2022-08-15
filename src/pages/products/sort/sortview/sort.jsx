import React from 'react'
import SortStyle from './sort.module.css'

const Sort = ({sortIndex, handleSort}) => {
    const sortOptions = [
        "Price (Lowest to Highest)",
        "Price (Highest to Lowest)",
        "Title (A to Z)",
        "Title (Z to A)"
    ]
    console.log(sortIndex, typeof sortIndex)
    return (
        <div>
            <p className={SortStyle.sortP}> Sort By </p>
            {sortOptions.map((option, index) => {
                return (
                    <div class="form-check" key = {index}>
                    <input class="form-check-input" 
                    type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                    value = {sortIndex}
                    onChange = {() => handleSort(index)}/>
                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                      {option}
                    </label>
                  </div>
                )
            })}
        </div>
    )
}

export default Sort