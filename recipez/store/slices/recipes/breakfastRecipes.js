import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const name = 'breakfastRecipes';

export const fetchBreakfastRecipes = createAsyncThunk(name, async (_, { dispatch, getState, rejectWithValue, fulfillWithValue}) =>{    

    return await new Promise((resolve, reject) =>{  // Mocks api call instead of axios
        const recipes = [
            {name: 'eggs', description: 'eggs and stuff', ingredients: ['eggs you idiot'], type: 'breakfast'}, 
            {name: 'pancakes', description: 'fluffy goodness and stuff', ingredients: ['pancake powder','Wafer cheesecake','apple pie halvah', '1 cup of milk', '2 eggs'],type: 'breakfast'}, 
            {name: 'breakfast stuff', description: "Sweet roll candy chocolate bar muffin pudding. Bear claw cake jelly-o chocolate cake cake topping sweet roll gingerbread bonbon. Marzipan chocolate apple pie wafer muffin toffee. Danish candy soufflé cupcake fruitcake lollipop halvah liquorice brownie. Cake jelly-o ice cream tart fruitcake marshmallow cupcake. Macaroon donut macaroon pudding ice cream fruitcake. Chocolate biscuit bear claw candy canes cupcake. Cotton candy wafer marshmallow dessert chocolate cake. Sugar plum tootsie roll chupa chups sugar plum chocolate bar cupcake cookie.", ingredients: ['pancake powder','Wafer cheesecake','apple pie halvah', '1 cup of milk', '2 eggs'], story: ["Cheesecake pie candy canes cheesecake caramels ice cream croissant candy canes. Brownie apple pie halvah gummies carrot cake brownie tiramisu dragée gummi bears. Oat cake jujubes topping wafer cake icing carrot cake candy icing. Oat cake soufflé gingerbread marshmallow jelly chocolate bar oat cake candy canes cheesecake. Chocolate cake cookie sweet sugar plum tart pudding tiramisu shortbread. Gummies sesame snaps jelly beans jelly beans donut brownie donut. Jujubes dessert gingerbread brownie cupcake icing. Pudding toffee tiramisu chocolate cake powder cake cake. Halvah chocolate cake ice cream apple pie bear claw croissant. Icing apple pie marzipan sugar plum brownie cheesecake cheesecake. Icing cake chocolate cake cotton candy sesame snaps wafer. Dessert cheesecake cheesecake sweet roll cake tootsie roll soufflé. Sweet ice cream bonbon tiramisu toffee marshmallow. Cookie soufflé cake wafer bear claw donut."],type: 'breakfast'}, 
        ]
        
        // setTimeout(()=>{
        //     resolve(recipes)  
        // }, 2000)
        resolve(recipes) 
    })
})

export const breakfastRecipes = createSlice({
    name: name,
    initialState: {
        data: [],
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