import { combineReducers } from "@reduxjs/toolkit";
import breakfastRecipes from "./slices/recipes/breakfastRecipes.js";
import userProfile from './slices/users/userProfile';

const reducers = combineReducers(
    {
        userProfile: userProfile,
        breakfastRecipes: breakfastRecipes
}
    )

export default reducers;
