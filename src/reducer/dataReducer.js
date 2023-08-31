import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    initialMatrix: null,
    changedInputValue: null,
    selectedIndex:[]
}

const dataSlice = createSlice({
    name: 'tableData',
    initialState: {
        value: initialValue
    },

    reducers: {
        matrixReducer: (state, action) => {
            state.value.initialMatrix = action.payload;
        },
        inputChangeReducer: (state, action) => {
            state.value.changedInputValue = action.payload;
        },
        indexReducer: (state, action) => {
            state.value.selectedIndex = action.payload;
        }
    }
})

export const {
    matrixReducer,
    inputChangeReducer,
    indexReducer
} = dataSlice.actions;
export default dataSlice.reducer
