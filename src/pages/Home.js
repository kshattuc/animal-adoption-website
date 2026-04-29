import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../navbar";

const Home = () => {

  return (
    <div className="page home p-4 text-center">
      <div className="hover-3d mx-auto max-w-3xl rounded-3xl bg-base-100 p-8 shadow-xl">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">Hopeful Tails</h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-neutral">
            Welcome everyone to Hopeful Tails, the purr-fect place to find the newest
            addition to your family!
          </p>
          <img className="mx-auto rounded-3xl shadow-lg" src="/images/home.webp" alt="dogs" />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};



export default Home;