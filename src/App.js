import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./config/supabaseClient";

import Navbar from "./navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Cats from "./pages/Cats";
import Dogs from "./pages/Dogs";
import OtherAnimals from "./pages/OtherAnimals";

function App() {
  const [animals, setAnimals] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      const { data, error } = await supabase.from("animal").select("*");

      if (error) {
        setFetchError("Could not fetch animal data");
        setAnimals([]);
        console.log(error);
      }

      if (data) {
        setAnimals(data);
        setFetchError(null);
      }
    };

    fetchAnimals();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {fetchError && <p className="px-4 text-center text-red-600">{fetchError}</p>}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cats" element={<Cats animals={animals} setAnimals={setAnimals} />} />
            <Route path="/dogs" element={<Dogs animals={animals} setAnimals={setAnimals} />} />
            <Route path="/other-animals" element={<OtherAnimals animals={animals} setAnimals={setAnimals} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;