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
import { booksReducer } from "./books/reducer";
import { favBooksReducer } from "./favBooks/reducer";
import { cartReducer } from "./cart/reducer";
import { regReducer } from "./registration/reducer";
import { activationReducer } from "./activation/reducer";
import { authReducer } from "./auth/reducer";
import { searchReducer } from "./search/reducer";
import { headerMenuReducer } from "./headerMenu/reducer";
import { accountReducer } from "./accountInfo/reducer";


const rootReducer = combineReducers({
	books: booksReducer,
	favBooks: favBooksReducer,
	cart: cartReducer,
	registration: regReducer,
	activation: activationReducer,
	auth: authReducer,
	search: searchReducer,
	headerMenu: headerMenuReducer,
	account: accountReducer
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['favBooks', 'cart', 'auth', 'account'],
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


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>
