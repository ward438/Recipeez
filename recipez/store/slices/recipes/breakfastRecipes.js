import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'breakfastRecipes';

export const fetchBreakfastRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const recipes = [
            {name: 'Eggs', description: 'Eggs and stuff', ingredients: ['Eggs you idiot']}, 
            {name: 'Pancakes', description: 'Pancakes and stuff', ingredients: ['pancake powder', '1 cup of milk', '2 eggs']}, 
            {name: 'yummy stuff', description: 'kjhjkhjkhjkhkjh', ingredients: ['pancake powder', '1 cup of milk', '2 eggs']}, 
        ]
        
        setTimeout(()=>{
            resolve(recipes)  
        }, 2000)
    })
})

export const breakfastRecipes = createSlice({
    name: name,
    initialState: {
        data: {},
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchBreakfastRecipes.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchBreakfastRecipes.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchBreakfastRecipes.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default breakfastRecipes.reducer;