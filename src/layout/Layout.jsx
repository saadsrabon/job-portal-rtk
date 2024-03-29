/* eslint-disable react/prop-types */

import { createContext, useState } from "react"
import { NavLink } from "react-router-dom"

export const JobTypeContext = createContext();
const Layout = ({children}) => {
    const [jobType,setJobType]=useState("All")
    
  return (
    <JobTypeContext.Provider value={{ jobType, setJobType }}>
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
                                <button onClick={()=>setJobType("Internship")} className="sub-menu"  id="lws-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </button>
                            </li>
                            <li>
                                <button onClick={()=>setJobType("Full Time")} className="sub-menu"  id="lws-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </button>
                            </li>
                            <li>
                                <button  onClick={()=>setJobType("Remote")} className="sub-menu"  id="lws-remote-menu">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/addjobs" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
       {children}
    </div>
    </>
    </JobTypeContext.Provider>
  )
}

export default Layout