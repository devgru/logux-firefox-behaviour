import React, {Component} from 'react';
import {Provider} from 'react-redux';

import StoreState from './StoreState';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StoreState />
      </Provider>
    );
  }
}

export default App;
