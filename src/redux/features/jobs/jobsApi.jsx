import axiosInstance from "../../../utils/axiosInstance";

export const fetchJobs =('jobs/fetchJobs', async () => {
  const response = axiosInstance.get('/jobs');
  return response.data
});
