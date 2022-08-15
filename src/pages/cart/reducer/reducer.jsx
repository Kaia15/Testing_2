import { unstable_batchedUpdates } from "react-dom";
import { SET_INDEX, ADD_INDEX } from "../constants/constants";

export const initState = {
    index: -1,
    check: []
}

export const reducer = (state, action) => {
    // console.log(action.payload)
    switch(action.type) {
        case SET_INDEX: 
            return {...state, index: parseInt(action.payload)}
        case ADD_INDEX:
            let prev = state['check']
            let filter = prev.filter(i => i === action.payload)
            let not = prev.filter(i => i !== action.payload)
            if (filter.length > 0) return {...state, check: [...not]}
            else return {...state, check: [...prev, action.payload]}
            // console.log(updated)
    }
}

export default reducer