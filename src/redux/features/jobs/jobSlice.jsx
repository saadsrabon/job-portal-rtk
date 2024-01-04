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
    extraReducers:builder=>{
        builder.addCase(fetchJobsThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchJobsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = action.payload;
        });
        builder.addCase(fetchJobsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(addJobsThunk.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(addJobsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs.push(action.payload);
        });
        builder.addCase(addJobsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export default jobSlice.reducer;