import { configureStore } from '@reduxjs/toolkit';

// Internal Imports
import reducers from './reducers';

export const store = configureStore({
    reducer: reducers
})
