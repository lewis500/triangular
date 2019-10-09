import React, { Dispatch } from "react";
import range from "lodash.range";
import { createSelector } from "reselect";

const min = Math.min,
  max = Math.max;

export type Car = {
  id: number;
  x: number;
};

export type State = {
  readonly play: boolean;
  readonly time: number;
  readonly k: number;
  readonly cars: Car[];
  readonly kj: number;
  readonly vf: number;
  readonly k0: number;
};

export const getVK = createSelector<
  State,
  number,
  number,
  number,
  (k: number) => number
>(
  [state => state.kj, state => state.k0, state => state.vf],
  (kj, k0, vf) => {
    const w = (vf * k0) / (kj - k0);
    return k => max(min(vf, w * (kj / k - 1)), 0);
  }
);

export const getQK = createSelector<
  State,
  (k: number) => number,
  (k: number) => number
>(
  [getVK],
  vk => k => k * vk(k)
);

const getCars = (k: number) =>
  range(0, 1000, 1 / k).map(x => ({
    id: x,
    x
  }));

export const initialState: State = {
  play: false,
  time: 0,
  vf: 4.5,
  kj: 1/3,
  k0: 1/9,
  k: 1 / 9,
  cars: getCars(1 / 9)
};

export enum ActionTypes {
  TICK = "TICK",
  SET_K = "SET_K",
  SET_PLAY = "SET_PLAY",
  SET_VF = "SET_VF",
  SET_KJ = "SET_KJ",
  SET_K0= "SET_K0"
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
      type: ActionTypes.SET_K0;
      payload: number;
    }
  | {
      type: ActionTypes.SET_VF;
      payload: number;
    }
  | {
      type: ActionTypes.SET_KJ;
      payload: number;
    }
  | {
      type: ActionTypes.SET_PLAY;
      payload: boolean;
    };

export const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.TICK:
      let dx = action.payload * getVK(state)(state.k);
      return {
        ...state,
        cars: state.cars.map(car => ({
          id: car.id,
          x: (car.x + dx) % 1000
        }))
      };
    case ActionTypes.SET_K0:
      return {
        ...state,
        k0: action.payload
      };
    case ActionTypes.SET_VF:
      return {
        ...state,
        vf: action.payload
      };
    case ActionTypes.SET_KJ:
      return {
        ...state,
        kj: action.payload
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