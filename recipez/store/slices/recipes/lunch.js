import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'lunchRecipes';

export const fetchLunchRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const recipes = [
            {name: 'club sandwich', description: 'meat and toasted bread', ingredients: ['meat', 'lettuce', 'tomatoe', 'toasted bread'],type: 'lunch'}, 
            {name: 'left overs', description: 'The old shit you eat', ingredients: ['old food'],type: 'lunch'}, 
            {name: 'yummy stuff', description: 'kjhjkhjkhjkhkjh', ingredients: ['pancake powder', '1 cup of milk', '2 eggs'],type: 'lunch'}, 
        ]
        
        // setTimeout(()=>{
        //     resolve(recipes)  
        // }, 2000)
        resolve(recipes) 
    })
})

export const lunchRecipes = createSlice({
    name: name,
    initialState: {
        data: {},
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