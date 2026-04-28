import AnimalList from "../AnimalList";

export default function OtherAnimals({ animals, setAnimals }) {
  const otherAnimals = animals.filter((a) => a.animal_type === "other");

  return <AnimalList pets={otherAnimals} setAnimals={setAnimals} />;
}