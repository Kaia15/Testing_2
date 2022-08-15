import React from 'react'
import { categories } from '../../../data/fields'
import CheckBox from './CheckBox/checkbox'
import SliderProton from './Slider/slider'
import ClearFilters from './ClearFilter/clearfilter'
import Sort from '../sort/sortview/sort'
import Search from '../../../components/search/search'

const Filter = ({
    categoryIndex,
    handleCategory,
    price,
    handlePrice,
    filter,
    applyFilters,
    clearFilters, 
    sortIndex,
    handleSort,
    searchVal,
    handleSearch
}) => {
    // console.log(categoryIndex)
    // console.log(price)
    return (
        <div style = {{flex: "4"}}>
            <p style = {{fontSize: "1.2em", fontFamily: "Impact, Haettenschweiler, sans-serif"}}> Search </p>
            <Search searchVal={searchVal} handleSearch = {handleSearch}/>
            <CheckBox categoryIndex={categoryIndex} handleCategory={handleCategory} categories = {categories} />
            <SliderProton price={price} handlePrice={handlePrice} />
            <Sort sortIndex={sortIndex} handleSort = {handleSort} />
            <ClearFilters clearFilters={clearFilters} />
        </div>
    )
}

export default Filter