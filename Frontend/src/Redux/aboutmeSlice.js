import {createSlice} from '@reduxjs/toolkit'
import {getAboutme} from "./aboutmeCrud"

const aboutMeSlice = createSlice({
    name:'aboutMe',
    initialState:{
        isLoading:false,
        isError:false,
        data:[]
    },
    extraReducers:(builder) => {
        builder.addCase(getAboutme.pending,(state) => {
            state.isLoading = true;
        });
        builder.addCase(getAboutme.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getAboutme.rejected,(state,action) => {
            state.isLoading = false;
            state.isError = action.payload
        });

    }
})

export default aboutMeSlice;