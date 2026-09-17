import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { BlogIndex } from "./pages/BlogIndex"
import { BlogPost } from "./pages/BlogPost"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogIndex />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}

export default App
