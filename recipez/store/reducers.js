import { combineReducers } from "@reduxjs/toolkit";
import breakfastRecipes from "./slices/recipes/breakfastRecipes.js";
import dinnerRecipes from "./slices/recipes/dinner.js";
import lunchRecipes from "./slices/recipes/lunch.js";
import treatsRecipes from "./slices/recipes/treats.js";
import userProfile from './slices/users/userProfile';

const reducers = combineReducers(
    {
        userProfile: userProfile,
        breakfastRecipes: breakfastRecipes,
        lunchRecipes: lunchRecipes,
        dinnerRecipes: dinnerRecipes,
        treatsRecipes: treatsRecipes
}
    )

export default reducers;
