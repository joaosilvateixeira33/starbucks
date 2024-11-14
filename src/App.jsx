import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./Pages/HomePage/index";
import { NewsPage } from "./Pages/NewsPage/index";
import { AboutPage } from "./Pages/AboutPage/index";
import { GlobalStyles } from "./globalStyles";
import { Header } from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <GlobalStyles/>
    </BrowserRouter>
  )
}

export default App
