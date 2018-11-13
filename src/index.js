import React from 'react'
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faArrowDown,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons'

import { history } from './store/configureStore'

import Root from './components/Root'
import App from './components/App'

library.add(faArrowUp, faArrowDown, faArrowCircleUp, faArrowCircleDown)

ReactDOM.render(
  <Root history={history}>
    <App history={history} />
  </Root>,
  document.getElementById('root')
)
