import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

import reducer from './reducer'

const enhacher = applyMiddleware(routerMiddleware(history), thunk, logger);

const store = createStore(reducer, enhacher);
window.store = store;

export default store;