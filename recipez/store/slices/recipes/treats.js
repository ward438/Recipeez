import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesValues } from './values';

const name = 'treatsRecipes';

export const fetchTreatsRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    
    
    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        resolve([...RecipesValues.treats])
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