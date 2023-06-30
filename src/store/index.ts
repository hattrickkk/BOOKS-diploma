import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction } from "redux-thunk";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({

})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(thunkMiddleware)
})
export const persistor = persistStore(store)
export default store;


type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>
