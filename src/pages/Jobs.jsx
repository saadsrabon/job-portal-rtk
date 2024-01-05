import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsThunk } from "../redux/features/jobs/jobSlice"


const Jobs = () => {
    const { jobs, isLoading, error } = useSelector((state) => state?.job);
    const [searchText, setSearchText] = useState("");
    const [sortOption, setSortOption] = useState("Default"); // Track sorting option

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobsThunk());
    }, [dispatch]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleSort = (e) => {
        setSortOption(e.target.value);
    };

    let filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (sortOption === "Salary (Low to High)") {
        filteredJobs.sort((a, b) => Number(a?.salary) - Number(b?.salary));
    } else if (sortOption === "Salary (High to Low)") {
        filteredJobs.sort((a, b) => Number(b?.salary) - Number(a?.salary));
    }

    let content= null;
    if (isLoading) {
        content =<div className="spinner-box"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div> ;
    }
    else if (error) {
        content = <div>{error}</div>;
    }
    else {

        jobs.length>0 && (content = filteredJobs.map((job, index) => (
            <div key={index} className="lws-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{job?.title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                        {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                        <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                        {job?.type}
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        BDT {job?.salary}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {job?.deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <button type="button" className="lws-edit btn btn-primary">
                        <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                        Edit
                    </button>
                </span>

                <span className="sm:ml-3">
                    <button type="button" className="lws-delete btn btn-danger ">
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>)))
    }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="lws-section-title">All Available Jobs</h1>
            <div className="flex gap-4">
                <div className="search-field group flex-1">
                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    <input onChange={handleSearch} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob"/>
                </div>
                <select value={sortOption} onChange={handleSort} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                    <option>Default</option>
                    <option value="Salary (Low to High)">Salary (Low to High)</option>
                    <option value="Salary (High to Low)">Salary (High to Low)</option>
                </select>
            </div>
        </div>

        <div className="jobs-list">
            {/* <!-- Single Job 1--> */}
           {content}
            {/* <!-- Single Job 1--> */}
        </div>
    </main>
</div>
  )
}

export default Jobs