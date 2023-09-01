import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    initialMatrix: [[]],
    changedInputValue: null,
    selectedIndex: []
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
        },
        updateMatrix: (state, action) => {
            console.log(state.value.initialMatrix, 'state from reducer')
            console.log(action, 'consoling triggered action')
            state?.value.initialMatrix[action.payload.currentRowIndex][action.payload.currentColumnIndex] == action.payload.newValue
        }
    }
})

export const {
    matrixReducer,
    inputChangeReducer,
    indexReducer,
    updateMatrix
} = dataSlice.actions;
export default dataSlice.reducer
