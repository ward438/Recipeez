import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'treatsRecipes';

export const fetchTreatsRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const recipes = [
            {name: 'candy', description: 'sugary goodness', ingredients: ['sugar', 'sugar', 'sugar'], steps:['lorem lorem', 'then lorem', 'then fry the lorem', 'serve'],type: 'treat'}, 
            {name: 'hot chocolate', description: 'The old shit you eat', ingredients: ['old food']}, 
            {name: 'hot chocolate', description: 'The old shit you eat', ingredients: ['old food']}, 
            {name: 'gross ass red hots', description: 'kjhjkhjkhjkhkjh', ingredients: ['pancake powder', '1 cup of milk', '2 eggs']}, 
        ]
        
        // setTimeout(()=>{
        //     resolve(recipes)  
        // }, 960)
        resolve(recipes)  
    })
})

export const treatsRecipes = createSlice({
    name: name,
    initialState: {
        data: {},
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