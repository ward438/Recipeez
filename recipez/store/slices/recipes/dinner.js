import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'dinnerRecipes';

export const fetchDinnerRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const recipes = [
            {name: 'pot roast', description: 'meat and toasted bread', ingredients: ['meat', 'lettuce', 'tomatoe', 'toasted bread'],type: 'dinner'}, 
            {name: 'stuffed cabbage', description: 'The old shit you eat', ingredients: ['old food']}, 
            {name: 'gross ass chicken', description: 'kjhjkhjkhjkhkjh', ingredients: ['pancake powder', '1 cup of milk', '2 eggs'],type: 'dinner'}, 
        ]
        
        // setTimeout(()=>{
        //     resolve(recipes)  
        // }, 2000)
        resolve(recipes)  
    })
})

export const dinnerRecipes = createSlice({
    name: name,
    initialState: {
        data: {},
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