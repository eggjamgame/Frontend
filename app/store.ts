import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
  Reducer,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { nicknameSlice, NicknameState } from "features/nickname";

interface ReducerState {
  nickname: NicknameState;
}

const combinedReducer = combineReducers({
  nickname: nicknameSlice.reducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer>,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer as Reducer<CombinedState<ReducerState>, AnyAction>,
  });

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;

export const wrapper = createWrapper(makeStore, { debug: true });
