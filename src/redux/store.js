import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/carsSlice";
import { modalReduser } from "./modal/modalSlice";
import { filterReducer } from "./filter/filterSlice";
import { favoriteReducer } from "./favorite/favoriteSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: "items",
};

const rootReducer = combineReducers({
  cars: carsReducer,
  modal: modalReduser,
  filter: filterReducer,
  favorite: persistReducer(favoritePersistConfig, favoriteReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
