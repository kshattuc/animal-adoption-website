import { useState } from "react";
export default function OtherAnimals() {
const OtherAnimals = [
  {
    id: 1,
    name: "Noodle",
    available: true,
    age: "1 year",
    breed: "Hognose Snake",
    color: "Brown/Tan/White",
    gender: "Male",
    description:"Noodle loves to climb and explore.",
    image: "/images/noodle.png"
  },
  {
    id: 2,
    name: "Cameron",
    available: true,
    age: "1 year",
    breed: "Chameleon",
    color: "Multicolored",
    gender: "Male",
    description:"Cameron is shy and likes to blend in with his surroundings.",
    image: "/images/cameron.png"
  },
  {
    id: 3,
    name: "Marigold",
    available: true,
    age: "6 months",
    breed: "Blue Mustard Betta Fish",
    color: "Yellow/Blue",
    gender: "female",
    description:"Marigold is territorial and loves to swim around.",
    image: "/images/marigold.png"
  },
  {
    id: 4,
    name: "Maria",
    available: true,
    age: "6 weeks",
    breed: "Hamster",
    color: "Orange/White",
    gender: "Female",
    description:"Maria is silly and loves to roll around in a hamster wheel all day.",
    image: "/images/maria.png"
  },
];
const [pets, setPets] = useState(OtherAnimals);

  const handleAdopt = (id) => {
    setPets((prevPets) =>
      prevPets.map((pet) =>
        pet.id === id ? { ...pet, available: false } : pet
      )
    );
  };

  return (
    <div className="row mt-5">
      {pets.map((pet) => (
        <div className="col-3" key={pet.id}>
          <h3>{pet.name}</h3>

          <img
            src={pet.image}
            alt={pet.name}
            style={{ width: "50%" }}
          />

          <p>Available: {pet.available ? "Yes!" : "No"}</p>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Color: {pet.color}</p>
          <p>Gender: {pet.gender}</p>
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
  )
}