import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ArticlePage from "./pages/articale/ArticlePage";
import DetailProject from "./pages/detailes-project/DetailProject";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-article" element={<ArticlePage />} />
          <Route path="/detail-project/:id" element={<DetailProject />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
