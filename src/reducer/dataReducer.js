import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    initialMatrix: null
}

const dataSlice = createSlice({
    name: 'tableData',
    initialState: {
        value: initialValue
    },

    reducers: {
        matrixReducer: (state, action) => {
            console.log(state.value.initialMatrix, 'state from reducer before action is dispatched')
            state.value.initialMatrix = action.payload
            console.log(state.value.initialMatrix, 'state from reducer after the action is dispatched')
        },
    }
})

export const {
    matrixReducer
} = dataSlice.actions;
export default dataSlice.reducer
