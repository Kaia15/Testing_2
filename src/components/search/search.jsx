import React from 'react'

const Search = ({searchVal, handleSearch}) => {
    console.log(searchVal)
    return (
        <div style = {{margin: "25px 20px"}}>
            <input type="search" 
            id="product" name="product"
            placeholder='Enter your key'
            value = {searchVal}
            onChange = {(e) => handleSearch(e.target.value)}></input>
        </div>
    )
}

export default Search