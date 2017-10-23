import {compose} from 'redux';
import createLoguxCreator from 'logux-redux/create-logux-creator'
import duck from './duck';

const initialState = undefined;
const enhancers = [];

const createStore = createLoguxCreator({
  subprotocol: '1.0.0',
  server: 'ws://127.0.0.1:1337',
  userId: 0
});

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(
  duck,
  initialState,
  compose(...enhancers)
);

store.client.start();

export default store;
