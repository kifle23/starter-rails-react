import { configureStore } from '@reduxjs/toolkit';
import reducer from './greetingSlice';

const store = configureStore({
    reducer: {
        greeting: reducer,
    }
});

export default store;