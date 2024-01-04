import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, fetchJobs } from "./jobsApi";

// thunk functions
const fetchJobsThunk =createAsyncThunk("jobs/fetchJobs", async () => {
    const jobs = await fetchJobs();
    return jobs;
});

const addJobsThunk = createAsyncThunk("jobs/addJob", async (payload) => {
    const job = await addJob(payload);
    return job;
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