import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../reducer/dataReducer";

export const store = configureStore({
    reducer:{
        data:dataReducer
    },
})

