import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./navbar";
import Cats from "./cats";
import Dogs from "./dogs";

function App() {
  const Home = () => <div><h1> Hopeful Tails </h1>
        <p> Welcome everyone to Hopeful Tails, the purr-fect place to find 
            the newest addition to your family! </p>
        <img src="images/home.webp" alt="dogs"/> </div>;
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
