import axiosInstance from "../../../utils/axiosInstance";

export const fetchJobs =('jobs/fetchJobs', async () => {
  const response = axiosInstance.get('/jobs');
  return response.data
});


export const addJob =('jobs/addJob', async (payload) => {
  const response = axiosInstance.post('/jobs', payload);
  return response.data
});