import {createSlice} from '@reduxjs/toolkit';


const initialState = {
user:null,
data:[],
submitBtn: "",
tempData:[],
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setLogin : (state, action)=>{
            state.user = action.payload;
        },
        setData: (state, action) => {
                state.data = action.payload;
        },
        setSubmit: (state, action)=>{
            state.submitBtn = action.payload;
        }
    }

});

export const {setData, setSubmit} = authSlice.actions;

export default authSlice.reducer