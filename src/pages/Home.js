import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar";

const Home = () => {

  return (
    <div className="page home">
      <h1>Hopeful Tails</h1>
      <p>
        Welcome everyone to Hopeful Tails, the purr-fect place to find the newest
        addition to your family!
      </p>
      <img src="/images/home.webp" alt="dogs" />
    </div>
  );
};

export default Home;