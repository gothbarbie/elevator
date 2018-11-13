import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { DIRECTION } from '../../constants'

import { showModal } from '../../actions/modalActions'
import { setUserInElevator } from '../../actions/userActions'
import { callToFloor } from '../../actions/elevatorActions'
import { addToQueue } from '../../actions/elevatorQueueActions'

import Elevator from '../Elevator'

const ElevatorsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`

class Floor extends React.Component {
  enterElevator = shaftNr => {
    const { setUserInElevator, showModal } = this.props

    setUserInElevator({ shaftNr })
    showModal()
  }

  callElevator = direction => {
    /**
     * 1. What floor is user at?
     * 2. Where is the nearest - not busy - elevator?
     * 3. Among the busy elevators, is any of them passing the user's floor
     *    on their way to its destination?
     */

    const {
      addToQueue,
      callToFloor,
      elevatorQueue,
      elevators,
      userAtFloor,
    } = this.props

    // check if elevator already exists at floor
    let elevatorExistsAtFloor = false

    Object.entries(elevators).forEach(([shaftNr, elevator]) => {
      if (elevator.currentFloor === userAtFloor) {
        elevatorExistsAtFloor = true
      }
    })

    // there's already an elevator available, do nothing
    if (elevatorExistsAtFloor) return

    // Check if matching call already exists in queue
    let exists = undefined

    if (elevatorQueue.length) {
      exists = elevatorQueue.find(
        item => item.targetFloor === userAtFloor && item.direction === direction
      )
    }

    // if it exists, do nothing, we don't need duplicates
    if (exists) return

    // it doesn't exist
    addToQueue({
      targetFloor: userAtFloor,
      direction,
    })
    // Give any available elevators a callToFloor()
    Object.entries(elevators).forEach(([shaftNr, elevator]) => {
      if (!elevator.isBusy) {
        let goInDirection
        if (elevator.currentFloor > userAtFloor) {
          goInDirection = DIRECTION.DOWN
        } else if (elevator.currentFloor < userAtFloor) {
          goInDirection = DIRECTION.UP
        }
        callToFloor({
          shaftNr: shaftNr,
          targetFloor: userAtFloor,
          direction: goInDirection,
        })
      }
    })

    // allElevators.forEach(elevator => {
    //   // 1. The elevator is not at the user's floor
    //   if (elevator.currentFloor !== userAtFloor) {
    //     // 2. Check if its available
    //     if (elevator.isBusy) {
    //       // 3a. Add it to list of available elevators
    //       availableElevators.push(elevator)
    //     } else {
    //       // 3b. Add it to a list of busy elevators
    //       busyElevators.push(elevator)
    //     }
    //   }
    // })

    // // See which elevator is closest and bring it down one level
    // if (availableElevators.length) {
    // }
  }

  render() {
    const { elevators, userAtFloor } = this.props

    return (
      <div>
        <h1>
          You are currently at:{' '}
          {userAtFloor ? 'Floor ' + userAtFloor : 'Ground Floor'}
        </h1>
        <ElevatorsWrapper>
          {Object.entries(elevators).map(([shaftNr, elevator]) => (
            <Elevator
              callElevatorGoingDown={() => this.callElevator(DIRECTION.DOWN)}
              callElevatorGoingUp={() => this.callElevator(DIRECTION.UP)}
              key={shaftNr}
              shaftNr={shaftNr}
              elevator={elevator}
              userAtFloor={userAtFloor}
              setUserInElevator={() => this.enterElevator(shaftNr)}
            />
          ))}
        </ElevatorsWrapper>
      </div>
    )
  }
}

const mapStateToProps = ({ elevatorQueue, elevators, router, user }) => {
  return {
    elevatorQueue,
    elevators,
    userAtFloor: user.atFloor,
  }
}

const mapDispatchToProps = {
  addToQueue,
  callToFloor,
  showModal,
  setUserInElevator,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Floor)
