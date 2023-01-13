import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'treatsRecipes';

export const fetchTreatsRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    
    const API_URL = "http://127.0.0.1:8000/api/recipez/?type=treat"    
    return axios.get(`${API_URL}`).then((response) => {
        if(response.status != 200){
            rejectWithValue("API Call Failed")
        }
        return response.data;
    })  
  
})

export const treatsRecipes = createSlice({
    name: name,
    initialState: {
        data: [],
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchTreatsRecipes.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchTreatsRecipes.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchTreatsRecipes.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default treatsRecipes.reducer;