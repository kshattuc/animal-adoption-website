import { useState } from "react";
export default function Dogs() {
const Dogs = [
  {
    id: 1,
    name: "Sadie",
    available: true,
    age: "1 year",
    breed: "Schnauzer",
    color: "Black",
    gender: "Female",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Sadie is very playful and especially loves to play with frisbees. She loves to drink water and will eat literally anything.",
    image: "/images/sadie.png"
  },
  {
    id: 2,
    name: "Candy",
    available: true,
    age: "12 weeks",
    breed: "Labrador Retriever",
    color: "Yellow",
    gender: "Female",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Candy is very affectiate and loves to give you kisses. She will follow you around the house and won't leave you side.",
    image: "/images/candy.png"
  },
  {
    id: 3,
    name: "Eddy",
    available: true,
    age: "6 weeks",
    breed: "Dachshunds",
    color: "Brown",
    gender: "Male",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Eddy loves to play and go on walks. He loves other animals and is great around kids.",
    image: "/images/eddy.png"
  },
  {
    id: 4,
    name: "Loco",
    available: true,
    age: "5 months",
    breed: "Cavalier King Charles Spaniel",
    color: "White/Brown",
    gender: "Male",
    house_trained:"Yes",
    vaccinated:"Yes",
    sprayed_neutered:"Yes",
    description:"Loco is a goofball who loves to run in circles and chase his own tail. He loves to play fetch and jump around.",
    image: "/images/loco.png"
  },
];
const [pets, setPets] = useState(Dogs);

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