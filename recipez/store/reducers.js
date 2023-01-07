import { combineReducers } from "@reduxjs/toolkit";

import userProfile from './slices/users/userProfile';

const reducers = combineReducers({
    userProfile: userProfile
})

export default reducers;
