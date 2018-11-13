import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import elevators from './elevatorReducer'
import user from './userReducer'
import modal from './modalReducer'
import elevatorQueue from './elevatorQueueReducer'

export default history =>
  combineReducers({
    elevators,
    router: connectRouter(history),
    user,
    modal,
    elevatorQueue,
  })
