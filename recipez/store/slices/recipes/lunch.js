import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const name = 'lunchRecipes';
export const fetchLunchRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    
    const API_URL = "http://127.0.0.1:8000/api/recipez/?type=lunch"    
    return axios.get(`${API_URL}`).then((response) => {
        if(response.status != 200){
            rejectWithValue("API Call Failed")
        }
        return response.data;
    })  
   
})

export const lunchRecipes = createSlice({
    name: name,
    initialState: {
        data: [],
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchLunchRecipes.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchLunchRecipes.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchLunchRecipes.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default lunchRecipes.reducer;