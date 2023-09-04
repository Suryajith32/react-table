import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    initialMatrix: [[]],
}

const dataSlice = createSlice({
    name: 'tableData',
    initialState: {
        value: initialValue
    },

    reducers: {
        addMatrix: (state, action) => {
            state.value.initialMatrix = action.payload;
        },
        updateMatrix: (state, action) => {
            state.value.initialMatrix[action.payload.currentRowIndex][action.payload.currentColumnIndex] = action.payload.newValue
        }
    }
})

export const {
    addMatrix,
    updateMatrix
} = dataSlice.actions;
export default dataSlice.reducer
