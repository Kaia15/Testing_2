import React from 'react'
import ClearfilterStyle from './clearfilter.module.css'
const ClearFilters = ({clearFilters}) => {
    return (
        <div>
            <button 
            onClick={clearFilters}
            className = {ClearfilterStyle.clearBtn}
            > Clear filters</button>
        </div>
    )
}

export default ClearFilters