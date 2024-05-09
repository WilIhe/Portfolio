import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProjectsPage from "./pages/ProjectsPage";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/HomePage' element={<Home />} />
          <Route path='/About Page' element={<AboutPage />} />
          <Route path='/ProjectsPage' element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
   );
}

export default App
