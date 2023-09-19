import { createSlice } from "@reduxjs/toolkit";
import { fetchRandomGreeting } from './actions';

const initialState = {
    greeting: "",
    status: "idle",
    error: null,
};

const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomGreeting.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
                state.status = "success";
                state.greeting = action.payload.greeting;
            })
            .addCase(fetchRandomGreeting.rejected, (state, action) => {
                state.status = "failure";
                state.error = action.error.message;
            });
    },
});

export default greetingSlice.reducer;