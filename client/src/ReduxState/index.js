import {createSlice} from '@reduxjs/toolkit';


const initialState = {
user:null,
data:[],
submitBtn: "",
}

export const authSlice = createSlice({
    name:'travelReducer',
    initialState,
    reducers: {
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