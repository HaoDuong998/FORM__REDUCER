const initialState = {
    arrHocVien : [],
}


export const baiTapFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ARR_HOCVIEN':{
            const newArrHocVien = [...state.arrHocVien, action.payload]
            return {...state, arrHocVien: newArrHocVien}
        }
        case 'DELETE_HOCVIEN': {
            const newArrHocVien = state.arrHocVien.filter(item => item.id !== action.payload)
            return {...state, arrHocVien: newArrHocVien}
        }
        default: 
        return state
    }
}