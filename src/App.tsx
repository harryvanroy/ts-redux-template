import React from "react";
import { useSelector } from "react-redux";
import { State } from "./actions/actionTypes";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const pokemon = useSelector((state: { pokemon: State }) => state.pokemon);

  return (
    <div className="root">
      <Form />
      <div className="pokemon-details">
        <div className="error-message">{pokemon.error}</div>
        {pokemon.data ? (
          <div>
            Name: {pokemon.data?.name}
            <br />
            Weight: {pokemon.data?.weight}
            <br />
            Height: {pokemon.data?.height}
            <br />
            Experience: {pokemon.data?.exp}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default App;
