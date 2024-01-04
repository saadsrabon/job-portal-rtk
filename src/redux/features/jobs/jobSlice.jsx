import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        jobs: [],
        isLoading: false,
        error: null,
    },
});

export default jobSlice.reducer;