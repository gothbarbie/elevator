export const SET_USER_AT_FLOOR = 'SET_USER_AT_FLOOR'
export const SET_USER_IN_ELEVATOR = 'SET_USER_IN_ELEVATOR'

export const setUserAtFloor = ({ atFloor }) => ({
  type: SET_USER_AT_FLOOR,
  payload: { atFloor },
})

export const setUserInElevator = ({ shaftNr }) => ({
  type: SET_USER_IN_ELEVATOR,
  payload: { shaftNr },
})
