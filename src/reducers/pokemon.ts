import { ActionType, State, Action } from "../actions/actionTypes";
import { Reducer } from "redux";

const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const pokemonReducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.FETCH_POKEMON_INIT:
      return { ...state, loading: true };
    case ActionType.FETCH_POKEMON_SUCCESS:
      return {
        loading: false,
        error: "",
        data: action.payload.pokemon,
      };
    case ActionType.FETCH_POKEMON_FAILURE:
      return {
        loading: false,
        error: action.payload.error,
        data: null,
      };
    default:
      return state;
  }
};
