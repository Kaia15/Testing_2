import { SET_INDEX, ADD_INDEX } from "../constants/constants";

export const setIndex = (payload) => {
    return {
        type: SET_INDEX,
        payload
    }
}

export const addIndex = (payload) => {
    return {
        type: ADD_INDEX,
        payload
    }
}