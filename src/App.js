import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store from './redux';
import history from './history';
import Root from './components/Root'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store = {store}>
            <ConnectedRouter history={history}>
                <Root />
            </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
