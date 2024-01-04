import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchJobs } from "./jobsApi";

// thunk functions
const fetchJobsThunk =createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await fetchJobs();
    return jobs;
});

const jobSlice = createSlice({
    name: "job",
    initialState: {
        jobs: [],
        isLoading: false,
        error: null,
    },
    extraReducers:{}
});

export default jobSlice.reducer;