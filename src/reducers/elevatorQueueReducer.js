import {
  ADD_TO_QUEUE,
  REMOVE_FROM_QUEUE,
} from '../actions/elevatorQueueActions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_QUEUE:
      return [
        ...state,
        {
          targetFloor: action.payload.targetFloor,
          direction: action.payload.direction,
        },
      ]

    case REMOVE_FROM_QUEUE:
      return [
        ...state,
        ...state.splice(action.payload.index, action.payload.index + 1),
        ...state.splice(action.payload.index + 1),
      ]

    default:
      return state
  }
}
