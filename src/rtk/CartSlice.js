
import {createSlice} from "@reduxjs/toolkit"

export const CartSlice = createSlice({
    initialState:[],
    name:"CartSlice",
    reducers:{
        addtocart: (state,action) => {
           const findProduct = state.find((product) => product.id === action.payload.id)
           if(findProduct){
            findProduct.quantaty += 1
           }else{
            const productclone = {...action.payload,quantaty:1}
               state.push(productclone)
           }
        },
        remove:(state,action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        RemoveAll:(state,action) => {
            return []
        }
    }
})


export const {addtocart,remove,RemoveAll} = CartSlice.actions

export default CartSlice.reducer