import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesValues } from './values';

const name = 'dinnerRecipes';

export const fetchDinnerRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        // [...RecipesValues.dinner] destruceted to clone new instances of objects so that useEffect can see the change in the object and render appropriate data for the tabs
        resolve([...RecipesValues.dinner]) 
    })
})

export const dinnerRecipes = createSlice({
    name: name,
    initialState: {
        data: [],
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchDinnerRecipes.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchDinnerRecipes.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchDinnerRecipes.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default dinnerRecipes.reducer;