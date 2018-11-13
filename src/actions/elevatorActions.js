export const ADD_ELEVATOR = 'ADD_ELEVATOR'
export const CALL_ELEVATOR_TO_FLOOR = 'CALL_ELEVATOR_TO_FLOOR'
export const ELEVATOR_UP_ONE_FLOOR = 'ELEVATOR_UP_ONE_FLOOR'
export const ELEVATOR_DOWN_ONE_FLOOR = 'ELEVATOR_DOWN_ONE_FLOOR'
export const RESET_ELEVATOR = 'RESET_ELEVATOR'

export const addElevator = ({ shaftNr, currentFloor }) => ({
  type: ADD_ELEVATOR,
  payload: { shaftNr, currentFloor },
})

export const callToFloor = ({ shaftNr, targetFloor, direction }) => ({
  type: CALL_ELEVATOR_TO_FLOOR,
  payload: { shaftNr, targetFloor, direction },
})

export const resetElevator = ({ shaftNr }) => ({
  type: RESET_ELEVATOR,
  payload: { shaftNr },
})

export const goUpOneFloor = ({ shaftNr }) => ({
  type: ELEVATOR_UP_ONE_FLOOR,
  payload: { shaftNr },
})

export const goDownOneFloor = ({ shaftNr }) => ({
  type: ELEVATOR_DOWN_ONE_FLOOR,
  payload: { shaftNr },
})
