import React, { Dispatch } from "react";
import * as params from "src/params";
import mo from "memoize-one";
import range from "lodash.range";
const { kj, vf, w, k0} = params,
  min = Math.min,
  max = Math.max;

// export const getRange = (v: number) => [...Array(v).keys()];
export const vk = mo((k: number) => max(min(vf, w * (kj / k - 1)), 0));
export const qk = mo((k: number) => max(min(vf * k, w * (kj - k)), 0));

export type Car = {
  id: number;
  x: number;
};

export type State = {
  readonly play: boolean;
  readonly time: number;
  readonly k: number;
  readonly cars: Car[];
};

const getCars = (k: number) =>
  range(0, 1000, 1000 / k).map(x => ({
    id: x,
    x
  }));

export const initialState = {
  play: false,
  time: 0,
  k: k0,
  cars: getCars(k0)
};

export enum ActionTypes {
  TICK = "TICK",
  SET_K = "SET_K",
  SET_PLAY = "SET_PLAY"
}

type Action =
  | {
      type: ActionTypes.TICK;
      payload: number;
    }
  | {
      type: ActionTypes.SET_K;
      payload: number;
    }
  | {
      type: ActionTypes.SET_PLAY;
      payload: boolean;
    };

export const QKLine = range(0, params.kj * (1 + 1 / 100), params.kj / 100).map(
  k => [k, qk(k)]
);

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.TICK:
      let dx = action.payload * vk(state.k);
      return {
        ...state,
        cars: state.cars.map(car => ({
          id: car.id,
          x: (car.x + dx) % 1000
        }))
      };
    case ActionTypes.SET_K:
      return {
        ...state,
        k: action.payload,
        cars: getCars(action.payload)
      };
    case ActionTypes.SET_PLAY:
      return {
        ...state,
        play: action.payload
      };
    default:
      return state;
  }
};

export const AppContext = React.createContext<{
  state: State;
  dispatch?: Dispatch<Action>;
}>({ state: initialState, dispatch: null });
