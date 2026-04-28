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
    <div className="row mt-5">
      {pets.map((pet) => (
        <div className="col-3" key={pet.id}>
          <h3>{pet.name}</h3>
          <img src={pet.image} alt={pet.name} style={{ width: "50%" }} />

          <p>Available: {pet.available ? "Yes!" : "No"}</p>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Color: {pet.color}</p>
          <p>Gender: {pet.gender}</p>
          <p> House-trained:{" "}
          {pet.house_trained == null
          ? "N/A"
          : pet.house_trained
          ? "Yes!"
          : "No"}
          </p>
          <p>Sprayed/Neutered: {pet.sprayed_neutered ? "Yes!" : "No"}</p>
          <p>Vaccinated: {pet.vaccinated ? "Yes!" : "No"}</p>
          <p>{pet.description}</p>

          <button
            onClick={() => handleAdopt(pet.id)}
            className="btn btn-success mt-2"
            disabled={!pet.available}
          >
            {pet.available ? "Adopt Now" : "Adopted"}
          </button>
        </div>
      ))}
    </div>
  );
}