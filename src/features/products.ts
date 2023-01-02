import {createSlice} from "@reduxjs/toolkit";  

const initialStateValue = [
    {
        id: 1, 
        width: 4, 
        height: 3, 
        image: "/assets/images/1p.png",
        type: "room"
    },
    {
        id: 2, 
        width: 4, 
        height: 3, 
        image: "/assets/images/2p.png",
        type: "room"
    },
    {
        id: 3, 
        width: 4, 
        height: 3, 
        image: "/assets/images/2p.png",
        type: "room"
    },
    {
        id: 4, 
        width: 4, 
        height: 3, 
        image: "/assets/images/3p.png",
        type: "room"
    },
    {
        id: 5, 
        width: 4, 
        height: 3, 
        image: "/assets/images/1p.png",
        type: "room"
    },
    {
        id: 6, 
        width: 4, 
        height: 3, 
        image: "/assets/images/2p.png",
        type: "room"
    },
    {
        id: 7,
        width: 4, 
        height: 3, 
        image: "/assets/images/2p.png",
        type: "room"
    },
    {
        id: 8, 
        width: 4, 
        height: 3, 
        image: "/assets/images/3p.png",
        type: "room"
    }
] 

export const productsSlice = createSlice({
    name: "products", 
    initialState: {value: initialStateValue},  

    reducers: {
        post: (state, action) => {
            return state = {
                value: action.payload
            }
        }
    }
}) 

export const {post} =  productsSlice.actions;  
export default productsSlice.reducer; 