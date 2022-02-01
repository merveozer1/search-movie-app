import {combineReducers, createStore} from "redux"
import { users } from "./users";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: users,})
    const persistConfig = {
        key: 'root',
        storage,
       
    }
    
    const persistedReducer = persistReducer(persistConfig, rootReducer)
    
    const store = createStore(persistedReducer)
    // const store = createStore(rootReducer)
    
    store.subscribe(() => console.log("STORE:::", store.getState()))
    
    export const persistor = persistStore(store)
    export default store
    