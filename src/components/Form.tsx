import React, { useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../actions/actionCreators";
import { State } from "../actions/actionTypes";

const Form = () => {
  const pokemon = useSelector((state: { pokemon: State }) => state.pokemon);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(fetchPokemon(name));
    setName("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Pokemon Name</label>
        <input
          className="form-control"
          placeholder="Enter Pokemon Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary form-button">
        {pokemon.loading ? (
          <>
            Loading...
            <span className="spinner-border spinner-border-sm"></span>
          </>
        ) : (
          <>Submit</>
        )}
      </button>
    </form>
  );
};

export default Form;
