// import uuid from 'uuid/v4'

import {
  ADD_ELEVATOR,
  CALL_ELEVATOR_TO_FLOOR,
  RESET_ELEVATOR,
  ELEVATOR_UP_ONE_FLOOR,
  ELEVATOR_DOWN_ONE_FLOOR,
} from '../actions/elevatorActions'

import { DIRECTION } from '../constants'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ELEVATOR:
      return {
        ...state,
        [action.payload.shaftNr]: {
          direction: DIRECTION.NONE,
          currentFloor: action.payload.currentFloor,
          targetFloor: action.payload.currentFloor,
          isBusy: false,
        },
      }

    case CALL_ELEVATOR_TO_FLOOR:
      return {
        ...state,
        [action.payload.shaftNr]: {
          ...state[action.payload.shaftNr],
          targetFloor: action.payload.targetFloor,
          isBusy: true,
          direction: action.payload.direction,
        },
      }

    case RESET_ELEVATOR:
      return {
        ...state,
        [action.payload.shaftNr]: {
          ...state[action.payload.shaftNr],
          direction: DIRECTION.NONE,
          isBusy: false,
        },
      }

    case ELEVATOR_UP_ONE_FLOOR:
      if (state[action.payload.shaftNr].currentFloor !== 10) {
        console.log('ELEVATOR_UP_ONE_FLOOR')
        return {
          ...state,
          [action.payload.shaftNr]: {
            ...state[action.payload.shaftNr],
            currentFloor: state[action.payload.shaftNr].currentFloor + 1,
          },
        }
      }
      return state

    case ELEVATOR_DOWN_ONE_FLOOR:
      if (state[action.payload.shaftNr].currentFloor !== 0) {
        return {
          ...state,
          [action.payload.shaftNr]: {
            ...state[action.payload.shaftNr],
            currentFloor: state[action.payload.shaftNr].currentFloor - 1,
          },
        }
      }
      return state

    default:
      return state
  }
}
