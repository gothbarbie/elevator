import { SHOW_MODAL, HIDE_MODAL } from '../actions/modalActions'

const initialState = {
  display: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        display: true,
      }

    case HIDE_MODAL:
      return {
        display: false,
      }

    default:
      return state
  }
}
