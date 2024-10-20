import { Memotest } from "./pages/memotest/Memotest";
import { NavBar } from "./components/navbar/NavBar";
import TaTeTi from "./pages/tateti/TaTeTi";
import { Home } from "./pages/home/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <section>
      <NavBar />
      <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tateti" element={<TaTeTi />} />
          <Route path="/memotest" element={<Memotest />} />
        </Routes>
      </div>
    </section>
  )
}

export default App;