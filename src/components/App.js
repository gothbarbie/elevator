import React from 'react'
import { connect } from 'react-redux'

import { DIRECTION } from '../constants'

import {
  addElevator,
  goUpOneFloor,
  goDownOneFloor,
  resetElevator,
} from '../actions/elevatorActions'

import { removeFromQueue } from '../actions/elevatorQueueActions'

import Normalize from './Normalize'
import Floor from './Floor'
import Modal from './Modal'
import DestinationPanel from './DestinationPanel'
import CurrentFloorPanel from './CurrentFloorPanel/CurrentFloorPanel'

/**
 * Which elevator(s) is free?
 * - Is available: move towards targetFloor
 * - Is busy: stop open doors if the destination is on the way to targetFloor
 */

class App extends React.Component {
  constructor(props) {
    super(props)

    const { addElevator } = props

    addElevator({ shaftNr: 1, currentFloor: 3 })
    addElevator({ shaftNr: 2, currentFloor: 10 })
    addElevator({ shaftNr: 3, currentFloor: 1 })
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  timer = () => {
    const {
      elevatorQueue,
      elevators,
      goUpOneFloor,
      goDownOneFloor,
      resetElevator,
      user,
    } = this.props

    console.log('timer', elevatorQueue.length)

    // If there's something in the queue
    if (elevatorQueue.length) {
      Object.entries(elevators).forEach(([shaftNr, elevator]) => {
        // Has reached targetFloor
        if (elevator.currentFloor === elevator.targetFloor) {
          console.log('arrived')

          const index = elevatorQueue.findIndex(item => {
            console.log('findIndex', item.targetFloor, elevator.targetFloor)
            return item.targetFloor === elevator.targetFloor
          })

          console.log('index', index)
          removeFromQueue({ index })
          resetElevator({ shaftNr })
        }

        if (elevator.direction === DIRECTION.UP) {
          console.log('up')
          goUpOneFloor({ shaftNr })
        }

        if (elevator.direction === DIRECTION.DOWN) {
          console.log('down')
          goDownOneFloor({ shaftNr })
        }
      })
    }
  }

  render() {
    const { elevators, user, modal } = this.props

    const elevator = elevators[user.insideElevatorNr]

    return (
      <div>
        <Normalize />
        <Floor />
        {modal.display && (
          <Modal>
            <CurrentFloorPanel
              direction={elevator.direction}
              currentFloor={elevator.currentFloor}
            />
            <DestinationPanel targetFloor={user.atFloor} />
          </Modal>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ elevators, elevatorQueue, user, modal }) => ({
  user,
  modal,
  elevators,
  elevatorQueue,
})

const mapDispatchToProps = {
  addElevator,
  goUpOneFloor,
  goDownOneFloor,
  resetElevator,
  removeFromQueue,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
