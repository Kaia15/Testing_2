import React from 'react'
import { useState, useEffect, useRef} from 'react'
import { categories } from '../../data/fields'
import { items } from '../../data/list'
import Filter from './filter'
import List from './list/list'
import Sort from './sort/sortview/sort'
// import Button from '../../common/button/button'
import LeftComponents from '../../components/navigation/leftcomponents'
import Search from '../../components/search/search'
import ProductsStyle from './products.module.css'
import { Link } from 'react-router-dom'

const Products = () => {
    const [categoryIndex, setCategoryIndex] = useState([])
    const [price, setPrice] = useState([0,100])
    const [searchVal, setSearchVal] = useState("")
    const [filter, setFilter] = useState([])
    // const [all, setAll] = useState(true)
    const [clear, setClear] = useState(true)
    const [sortIndex, setSortIndex] = useState(0)
    const [openSort, setOpenSort] = useState(false)

    const indexes = []
    
    const handleCategory = (id) => {
        let updatedCheck;
        if (categoryIndex.includes(id)) {
            updatedCheck = categoryIndex.filter(c => c !== id)
            setCategoryIndex(updatedCheck)
        }
        else {
            setCategoryIndex(prev => { return [...prev, id]})
            // updatedCheck = unCheck.push(id)
        }
    }

    const handlePrice = (event, newValue) => setPrice(newValue)

    const handleSort = (input) => setSortIndex(parseInt(input))

    const handleSearch = (input) => setSearchVal(input)

    const applySort = (list, index) => {
        if (index < 0 || index > list.length) return list
        switch(index) {
            case 0:
                return list.sort((a,b) => a.price - b.price)
            case 1: 
                return list.sort((a,b) => a.price - b.price).reverse()
            case 2:
                return list.sort((a,b) => {
                    let lowera = a['title'].toLowerCase()
                    let lowerb = b['title'].toLowerCase()
                    if (lowera < lowerb) return -1;
                    else return 1;
                })
            case 3: 
                return list.sort((a,b) => {
                    let lowera = a['title'].toLowerCase()
                    let lowerb = b['title'].toLowerCase()
                    if (lowera < lowerb) return -1;
                    else return 1;
                }).reverse()
        }
    }

    const applyFilters = useEffect(() => {
        let after = items

        /*if (price) {
            after = after.filter((item, index) => {
                console.log(item['price'])
                return item['price'] <= parseInt(price)
            })
        }

        if (categoryIndex) {
            after = after.filter((item, index) => {
                return categoryIndex.includes(index)
            })
        }*/

        after = after.filter((item, index) => {
            if (
                ((item['price'] < price[0]*100) || (item['price'] > price[1]*100)) ||
                (categoryIndex.length > 0 && !categoryIndex.includes(categories.indexOf(item['category'])))
            ) return false
            return true
        })

        applySort(after, sortIndex)

        if (searchVal) {
            let upperSearch = searchVal.toUpperCase();
            let lowerSearch = searchVal.toLowerCase();
            after = after.filter((item, index) => {
                let upperTitle = item['title'].toUpperCase();
                let lowerTitle = item['title'].toLowerCase();
                return upperTitle.includes(upperSearch) || lowerTitle.includes(lowerSearch)
            })
        }
        console.log(after)
        setFilter(after)
        // setAll(true)
    }, [categoryIndex, price, searchVal, sortIndex])

    // console.log(filter)
    // console.log(price, typeof price)
    const clearFilters = () => {
        setClear(true)
        setCategoryIndex([])
        setPrice([0,100])
    }

    
    return (
        <div>
            {clear ? 
            (<div>
            <div className={ProductsStyle.navigation}>
                <button 
                className = {ProductsStyle.clear}
                onClick = {() => {
                    setClear(false)
                }}>
                FILTER </button>
                <Search searchVal={searchVal} handleSearch = {handleSearch}/>
            </div>
            <div style = {{margin: "0 100px"}}>
                <h3 style = {{textAlign: "center", margin: "40px 0px"}}> Our latest products </h3>
                <List list = {filter} />
            </div>
            </div>
            ) :
            (
            <div>
            <div className='filter' style = {{display: "flex", flexDirection: "row", margin: "0px 50px"}}>
            <Filter 
            categoryIndex={categoryIndex}
            handleCategory={handleCategory}
            price={price}
            handlePrice={handlePrice}
            filter={filter}
            applyFilters = {applyFilters}
            clearFilters = {clearFilters}
            sortIndex = {sortIndex}
            handleSort = {handleSort}
            searchVal = {searchVal}
            handleSearch = {handleSearch}
            />
            <div className = {ProductsStyle.listshow}>
            {filter.length > 0 ? <List list = {filter} /> : <div><p> No results found </p></div>}
            </div>
            </div>
            </div>
            )
            }
        </div>
        
    )
}

export default Products