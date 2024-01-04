
function App() {
 

  return (
    <>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <img src="./images/logo.svg" />
    </nav>
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <a href="/jobs" className="main-menu menu-active" id="lws-alljobs-menu">
                            <i className="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </a>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li>
                                <a className="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </a>
                            </li>
                            <li>
                                <a className="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </a>
                            </li>
                            <li>
                                <a className="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/jobs" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                    <h1 className="lws-section-title">All Available Jobs</h1>
                    <div className="flex gap-4">
                        <div className="search-field group flex-1">
                            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                            <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob"/>
                        </div>
                        <select id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                            <option>Default</option>
                            <option>Salary (Low to High)</option>
                            <option>Salary (High to Low)</option>
                        </select>
                    </div>
                </div>

                <div className="jobs-list">
                    {/* <!-- Single Job 1--> */}
                    <div className="lws-single-job">
                        <div className="flex-1 min-w-0">
                            <h2 className="lws-title">Back End Developer</h2>
                            <div className="job-footers">
                                <div className="lws-type">
                                    {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                                    <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i>
                                    Full-time
                                </div>
                                <div className="lws-salary">
                                    <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                                    BDT 40,000
                                </div>
                                <div className="lws-deadline">
                                    <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                                    Closing on 2022-12-31
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
                    </div>
                    {/* <!-- Single Job 1--> */}
                </div>
            </main>
        </div>
    </div>
    </>
  )
}

export default App
