import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger, thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
}
