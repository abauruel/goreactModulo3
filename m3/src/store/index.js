import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import reducers from './reducers';
import sagas from './sagas';

const Middleware = [];
const sagaMiddleware = createSagaMiddleware();

Middleware.push(sagaMiddleware);


const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createAppropriateStore(reducers, compose(applyMiddleware(...Middleware)));
sagaMiddleware.run(sagas);

export default store;
