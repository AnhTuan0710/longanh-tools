import { ThunkAction, Action, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducers from '../redux/reducers';
import { logger } from 'redux-logger';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['customer']
};
const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(sagaMiddleware);
middleware.push(logger);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
