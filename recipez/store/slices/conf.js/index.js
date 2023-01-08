import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'userClick';

export const clickConfirmation = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const confirmation = [{userClick: 'breakfast'}, {userClick: 'lunch'}, {userClick: 'dinner'}, {userClick: 'treats'}, {userClick: 'home'}]        
        resolve(confirmation)  
    })
})

export const userClick = createSlice({
    name: name,
    initialState: {
        data: {},
        loading: false,
        errored: false,
        fulfilled: false
    },
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(clickConfirmation.pending, state =>{
            state.loading = true;
            state.errored = false;
            state.fulfilled = false;
        });
        builder.addCase(clickConfirmation.rejected, state =>{
            state.loading = false;
            state.errored = true;
        });
        builder.addCase(clickConfirmation.fulfilled, (state, action) =>{
            state.loading = false;
            state.errored = false;
            state.fulfilled = true;
            state.data = action.payload;
        });
    }
})

export default userClick.reducer;