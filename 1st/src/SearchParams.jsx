import { useState, useContext } from "react";
import AdoptPetContext from "./context/AdoptedPets";
import Results from "./Reasults";
import useBreedList from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetch/fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    animal: "",
    location: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breedlist] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptPetContext);

  const result = useQuery(["search", requestParams], fetchSearch);
  const pets = result?.data?.pets ?? [];
  const isLoading = result?.isLoading;
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const fromData = new FormData(e.target);
          const obj = {
            animal: fromData.get("animal") ?? [],
            location: fromData.get("location") ?? [],
            breed: fromData.get("breed") ?? [],
          };
          setRequestParams(obj);
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            defaultValue={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" disabled={breedlist.length === 0} name="breed">
            <option />
            {breedlist.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {isLoading ? (
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      ) : (
        <Results pets={pets} />
      )}
    </div>
  );
};

export default SearchParams;
