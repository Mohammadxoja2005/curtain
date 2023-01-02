import {createSlice} from "@reduxjs/toolkit"; 

const initialStateValue = {bool: false}; 

export const orderSlice = createSlice({
    name: "order",
    initialState: { value: initialStateValue }, 

    reducers: {
        set: (state, action) => {
            return state = {
                value: {
                    bool: action.payload.bool
                }
            }
        }
    }
}) 

export const {set} = orderSlice.actions;  
export default orderSlice.reducer; 