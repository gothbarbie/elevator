export const ADD_TO_QUEUE = 'ADD_TO_QUEUE'
export const REMOVE_FROM_QUEUE = 'REMOVE_FROM_QUEUE'

export const addToQueue = ({ targetFloor, direction }) => ({
  type: ADD_TO_QUEUE,
  payload: { targetFloor, direction },
})

export const removeFromQueue = ({ index }) => ({
  type: REMOVE_FROM_QUEUE,
  payload: { index },
})
