import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice';
import userReducer from './userSlice';
import websocketReducer from './websocketSlice';
import networkUrlReducer from './networkUrlSlice';
import networkUrlSlice from './networkUrlSlice';

const rootReducer = combineReducers({
    //reducers will go here
    auth:authReducer,
    user: userReducer,
    websocket: websocketReducer,
    networkUrl: networkUrlSlice

});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    //some other stuff like middleware, dont need here
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
