import React from 'react'
import { Slider, Box } from '@mui/material'
import SliderStyle from './slider.module.css'


const SliderProton = ({price, handlePrice}) => {
      
    const marks = [
        {
            value: 0,
            label: 0
        },
        {
            value: 10,
            label: 10
        },
        {
            value: 30,
            label: 30
        },
        {
            value: 50,
            label: 50
        },
        {
            value: 70,
            label: 70
        },
        {
            value: 100,
            label: 100
        }
    ]

    const min = (price[0] > 0 ) ? `$${price[0]}00` : '$0'
    const max = `$${price[1]}00`

    /*function valuetext() {
        return `$${price}00`;
    }*/
        return (
          <Box sx={{ width: 300}}>
            <p className={SliderStyle.priceP}> Price Range </p>
            <Slider
                style = {{marginLeft: "8px", marginRight: "8px"}}
                value={price}
                onChange={handlePrice}
                valueLabelDisplay="auto"
                marks = {marks}
            />
            <div style = {{display: "flex", flexDirection: "row"}}>
            <p> Min: {min} </p>
            <p style = {{paddingLeft: "20px"}}> Max: {max} </p>
            </div>
          </Box>
        );
      
}

export default SliderProton