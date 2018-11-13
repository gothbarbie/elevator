import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import createRootReducer from '../reducers'

export const history = createBrowserHistory()

function configureStore(initialState = {}) {
  const middlewares = [thunk, routerMiddleware(history)]
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

  return createStore(createRootReducer(history), initialState, enhancer)
}

const store = configureStore()

export default store
