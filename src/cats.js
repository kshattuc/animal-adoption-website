import { useState } from "react";
export default function Cats() {
const Cats = [
  {
    id: 1,
    name: "Claire",
    available: true,
    age: "4 months",
    breed: "Siamese",
    color: "Cream/Dark Brown",
    gender: "Female",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Claire is a very playful kitty who loves attention.",
    image: "/images/claire.jpg"
  },
  {
    id: 2,
    name: "Whiskers",
    available: true,
    age: "2 months",
    breed: "British Shorthair",
    color: "Grey/Tan/White",
    gender: "Male",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Whiskers is very mischevious and loves to play and hide toys around the house.",
    image: "/images/whiskers.jpg"
  },
  {
    id: 3,
    name: "Midnight",
    available: true,
    age: "12 weeks",
    breed: "Maine Coon",
    color: "Black",
    gender: "Female",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Midnight enjoys nature and walking outside. She is very intelligent and picks up new skills quickly.",
    image: "/images/midnight.png"
  },
  {
    id: 4,
    name: "Fibonacci",
    available: true,
    age: "6 weeks",
    breed: "Munchkin Cat",
    color: "White/Yellow/Grey",
    gender: "Male",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Fibonacci loves to learn new skills. He also loves to curl up by the fire.",
    image: "/images/fibonacci.png"
  },
];
const [pets, setPets] = useState(Cats);

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
          <p>House-trained: {pet.house_trained}</p>
          <p>Sprayed/Neutered: {pet.sprayed_neutered}</p>
          <p>Vaccinated: {pet.vaccinated}</p>
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