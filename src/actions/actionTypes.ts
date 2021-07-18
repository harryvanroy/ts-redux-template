export enum ActionType {
  FETCH_POKEMON_INIT = "FETCH_POKEMON_INIT",
  FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS",
  FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE",
}

export interface Pokemon {
  name: string;
  weight: number;
  height: number;
  exp: number;
}

export interface State {
  loading: boolean;
  data: Pokemon | null;
  error: string;
}

interface ActionPokemonInit {
  type: ActionType.FETCH_POKEMON_INIT;
}

interface ActionPokemonSuccess {
  type: ActionType.FETCH_POKEMON_SUCCESS;
  payload: { pokemon: Pokemon };
}

export interface ActionPokemonFailure {
  type: ActionType.FETCH_POKEMON_FAILURE;
  payload: { error: string };
}

export type Action =
  | ActionPokemonInit
  | ActionPokemonSuccess
  | ActionPokemonFailure;
