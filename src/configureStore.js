import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import reducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewares = [
        loggerMiddleware,
        sagaMiddleware
    ]
    const store = createStore(reducer, composeEnhancers(
        applyMiddleware(...middlewares),
    ));

    sagaMiddleware.run(rootSaga);
    return store;
}