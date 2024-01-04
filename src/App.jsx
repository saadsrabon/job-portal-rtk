import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Jobs from "./pages/Jobs"

function App() {
 

  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Jobs/>} />
        
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
