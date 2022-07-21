import {combineReducers} from "redux"
import user from './user'
 
//redux-persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'root',
    storage,
    whitelist:['user']
}

const rootReducer = combineReducers({ user });

export default persistReducer(persistConfig,rootReducer)
