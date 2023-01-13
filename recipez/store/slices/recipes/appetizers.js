import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const name = 'appetizerRecipes';

export const fetchAppetizerRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    
    const API_URL = "http://127.0.0.1:8000/api/recipez/?type=appetizer"    
    return axios.get(`${API_URL}`).then((response) => {
        if(response.status != 200){
            rejectWithValue("API Call Failed")
        }
        return response.data;
    })  
})

export const appetizerRecipes = createSlice({
    name: name,
    initialState: {
        data: [],
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchAppetizerRecipes.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchAppetizerRecipes.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchAppetizerRecipes.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default appetizerRecipes.reducer;