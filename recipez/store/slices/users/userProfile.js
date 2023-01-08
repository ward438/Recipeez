import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'userProfile';

export const fetchUserProfile = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const users = [{username: 'Robert'}, {username: 'Alex'}]
        const randomNum = Math.floor(Math.random() * users.length);
        
        
        // setTimeout(()=>{
        //     resolve(users[randomNum])  
        // }, 2000)
        resolve(users[randomNum])  
    })
})

export const userProfile = createSlice({
    name: name,
    initialState: {
        data: {},
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(fetchUserProfile.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(fetchUserProfile.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(fetchUserProfile.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default userProfile.reducer;