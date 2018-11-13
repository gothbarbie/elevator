import { SET_USER_AT_FLOOR, SET_USER_IN_ELEVATOR } from '../actions/userActions'

const initialState = {
  atFloor: 0,
  insideElevatorNr: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AT_FLOOR:
      return {
        ...state,
        atFloor: action.payload.atFloor,
      }

    case SET_USER_IN_ELEVATOR:
      return {
        ...state,
        insideElevatorNr: action.payload.shaftNr,
      }

    default:
      return state
  }
}
