import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hollywood from "./pages/Hollywood";
import Tollywood from "./pages/Tollywood";
import Bollywood from "./pages/Bollywood";
import MovieDetail from "./pages/MovieDetail";


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/tollywood" element={<Tollywood />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
         <Route path="/bollywood" element={<Bollywood />} />
      </Routes>
    </Router>
  );
}
