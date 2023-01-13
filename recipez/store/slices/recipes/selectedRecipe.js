import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RecipesValues } from './values';

const name = 'selectedRecipe';
export const fetchSelectedRecipe = createAsyncThunk(name, async (recipe, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    
    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        let selectedRecipe = null;
        if(recipe.mealType === 'breakfast'){  
            selectedRecipe = RecipesValues.breakfast.find(recipeDataItem => recipeDataItem.name === recipe.recipe)
         } if(recipe.mealType === 'lunch'){
            selectedRecipe = RecipesValues.lunch.find(recipeDataItem => recipeDataItem.name === recipe.recipe)
         } if(recipe.mealType === 'dinner'){
            selectedRecipe = RecipesValues.dinner.find(recipeDataItem => recipeDataItem.name === recipe.recipe)
         } if(recipe.mealType === 'treat'){
            selectedRecipe = RecipesValues.treats.find(recipeDataItem => recipeDataItem.name === recipe.recipe)
         } if(recipe.mealType === 'appetizer'){
            selectedRecipe = RecipesValues.appetizers.find(recipeDataItem => recipeDataItem.name === recipe.recipe)
         }        
        resolve(selectedRecipe) 
    })   
})




export const selectedRecipe = createSlice({
    name: name,
    initialState: {
        data: {},
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchSelectedRecipe.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchSelectedRecipe.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchSelectedRecipe.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default selectedRecipe.reducer;