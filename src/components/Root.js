import React from 'react'
import { Provider } from 'react-redux'

import defaultStore from '../store/configureStore'

const Root = ({ children }) => (
  <Provider store={defaultStore}>{children}</Provider>
)

export default Root
