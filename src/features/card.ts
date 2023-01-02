import {createSlice} from "@reduxjs/toolkit"; 

const initialStateValue = {id: 1, width: 4, height: 2.5, image: "/assets/images/1p1.png"};  

export const cardSlice = createSlice({
    name: "card", 
    initialState: {value: initialStateValue},  
    
    reducers: {
        post: (state, action) => {
            return state = { 
                value: {
                    id: action.payload.id, 
                    width: action.payload.width, 
                    height: action.payload.height, 
                    image: action.payload.image
                }
            }
        }
    }
}) 

export const {post} = cardSlice.actions;  
export default cardSlice.reducer;