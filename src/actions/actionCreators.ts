import axios from "axios";
import { ActionType, Pokemon, Action } from "./actionTypes";
import { Dispatch, ActionCreator } from "redux";

export const fetchPokemonInit: ActionCreator<Action> = () => ({
  type: ActionType.FETCH_POKEMON_INIT,
});

export const fetchPokemonSuccess: ActionCreator<Action> = (
  pokemon: Pokemon
) => ({
  type: ActionType.FETCH_POKEMON_SUCCESS,
  payload: { pokemon },
});

export const fetchPokemonFailure: ActionCreator<Action> = (error: string) => ({
  type: ActionType.FETCH_POKEMON_FAILURE,
  payload: { error },
});

export const fetchPokemon =
  (pokemonName: string) => (dispatch: Dispatch<Action>) => {
    dispatch(fetchPokemonInit());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        const newPokemon = {
          name: res.data.name,
          weight: res.data.weight,
          height: res.data.height,
          exp: res.data.base_experience,
        };
        dispatch(fetchPokemonSuccess(newPokemon));
      })
      .catch((error) => dispatch(fetchPokemonFailure(error.message)));
  };
