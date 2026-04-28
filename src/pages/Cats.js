import AnimalList from "../AnimalList";

export default function Cats({ animals, setAnimals }) {
  const cats = animals.filter((a) => a.animal_type === "cat");

  return <AnimalList pets={cats} setAnimals={setAnimals} />;
}