const initialState = {
    arrHocVien : [],
}


export const baiTapFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ARR_HOCVIEN':{
            const newArrHocVien = [...state.arrHocVien, action.payload]
            return {...state, arrHocVien: newArrHocVien}
        }

        default: 
        return state
    }
}