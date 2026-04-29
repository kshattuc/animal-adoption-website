import { supabase } from "./config/supabaseClient";

export default function AnimalList({ pets, setAnimals }) {
  const handleAdopt = async (id) => {
    const { error } = await supabase
      .from("animal")
      .update({ available: false })
      .eq("id", id);

    if (error) {
      console.log(error);
      alert("Could not update adoption status");
      return;
    }

    setAnimals((prev) =>
      prev.map((pet) =>
        pet.id === id ? { ...pet, available: false } : pet
      )
    );
  };

  return (
    <div className="space-y-12 p-12">
      {pets.map((pet) => (
        <div
            key={pet.id}
            className="hero mx-auto w-full max-w-5xl min-h-[22rem] md:min-h-[28rem] lg:min-h-[32rem] 
                        overflow-hidden rounded-3xl shadow-2xl text-white relative"
            style={{
                backgroundImage: `url(${pet.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#85efc3", // fills empty space around image
            }}
            >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Animal name */}
            <div className="absolute top-4 left-4 rounded-2xl bg-black/50 px-5 py-3 backdrop-blur-sm z-10">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{pet.name}</h3>
            </div>

            {/* Collapse section */}
            <div className="absolute inset-x-0 bottom-6 flex justify-center px-6 z-10 pointer-events-none">
                <div className="w-full max-w-3xl pointer-events-auto">
                <div className="collapse collapse-arrow bg-white/10 border border-white/20 text-white shadow-lg bg-black/60">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-semibold text-center">
                    Learn More About Me!
                    </div>

                    <div className="collapse-content bg-black/30 text-sm text-green-100">
                    <div className="grid gap-3 md:grid-cols-2">
                        <div>
                        <p><strong>Available:</strong> {pet.available ? "Yes" : "No"}</p>
                        <p><strong>Age:</strong> {pet.age}</p>
                        <p><strong>Breed:</strong> {pet.breed}</p>
                        <p><strong>Color:</strong> {pet.color}</p>
                        </div>
                        <div>
                        <p><strong>Gender:</strong> {pet.gender}</p>
                        <p><strong>House-trained:{" "}</strong> {pet.house_trained == null ? "N/A" : pet.house_trained ? "Yes!" : "No"}</p>
                        <p><strong>Spayed/Neutered:</strong> {pet.sprayed_neutered ? "Yes!" : "No"}</p>
                        <p><strong>Vaccinated:</strong> {pet.vaccinated ? "Yes!" : "No"}</p>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-black/40 p-4 text-sm text-green-100">
                        <p>{pet.description}</p>
                    </div>

                    <button
                        onClick={() => handleAdopt(pet.id)}
                        className="btn btn-success mt-4"
                        disabled={!pet.available}
                    >
                        {pet.available ? "Adopt Now" : "Adopted"}
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
}
