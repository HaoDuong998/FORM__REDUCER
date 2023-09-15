import { configureStore } from '@reduxjs/toolkit'
import { baiTapFormReducer } from './reducer/baiTapForm'
// import formSlice from './slice/formSlice'
export const store = configureStore({
    reducer: {
        baiTapFormReducer,
    }   
})