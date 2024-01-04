import { useState } from "react"

// create states for each input field
const AddJob = () => {
 const [jobTitle, setJobTitle] = useState('')
  const [jobType, setJobType] = useState('')
  const [jobSalary, setJobSalary] = useState('')
  const [jobDeadline, setJobDeadline] = useState('')

 const handleAddJob = (e) => {}

  return (
    <>
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="fieldContainer">
              <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
              <select id="lws-JobTitle" name="lwsJobTitle" required>
                <option defaultValue>Select Job</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Full Stack Developer">Full Stack Developer</option>
                <option value="MERN Stack Developer">MERN Stack Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Social Media Manager">Social Media Manager</option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Junior Executive">Junior Executive</option>
                <option value="Android App Developer">Android App Developer</option>
                <option value="IOS App Developer">IOS App Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Software Engineer" >Software Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobType">Job Type</label>
              <select id="lws-JobType" name="lwsJobType" required>
                <option value="" hidden selected>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                  placeholder="20,00,000" />
              </div>
            </div>

            <div className="fieldContainer">
              <label htmlFor="lws-JobDeadline">Deadline</label>
              <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
            </div>

            <div className="text-right">
              <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    </>
  )
}

export default AddJob