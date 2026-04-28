import AnimalList from "../AnimalList";

export default function Dogs({ animals, setAnimals }) {
  const dogs = animals.filter((a) => a.animal_type === "dog");

  return <AnimalList pets={dogs} setAnimals={setAnimals} />;
}