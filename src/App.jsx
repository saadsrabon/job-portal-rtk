import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Jobs from "./pages/Jobs"
import AddJob from "./pages/AddJob"

function App() {
 

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Jobs/>} />
        <Route path="/addjobs" element={<AddJob/>} />
        
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
