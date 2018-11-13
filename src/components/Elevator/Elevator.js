import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DIRECTION } from '../../constants'

import CurrentFloorPanel from '../CurrentFloorPanel'
import CircleButton from '../CircleButton'

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ElevatorWrapper = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const ShaftNr = styled.h1`
  text-align: center;
`

const DoorsAndButtons = styled.div`
  display: flex;
  position: relative;
`

const ElevatorDoors = styled.div`
  width: 25rem;
  height: 50rem;
  background-color: #222;
  position: relative;
`

const DoorLeft = styled.div`
  background-color: #ccc;
  position: absolute;
  height: 100%;
  width: 50%;
  width: ${({ doorsOpen }) => doorsOpen && '5%'};
  left: 0;
  top: 0;
`
const DoorRight = styled.div`
  background-color: #ccc;
  position: absolute;
  height: 100%;
  width: 50%;
  width: ${({ doorsOpen }) => doorsOpen && '5%'};
  right: 0;
  top: 0;
`

const ElevatorButtons = styled.div`
  position: absolute;
  right: -6rem;
  top: 50%;
`

const EnterButton = styled.button`
  border: 1px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  font-size: 1.4rem;
  font-weight: 300;
  cursor: pointer;
`

const Elevator = ({
  userAtFloor,
  shaftNr,
  elevator,
  callElevatorGoingDown,
  callElevatorGoingUp,
  setUserInElevator,
}) => {
  return (
    <OuterWrapper>
      <ElevatorWrapper>
        <ShaftNr>{shaftNr}</ShaftNr>

        <CurrentFloorPanel
          direction={elevator.direction}
          currentFloor={elevator.currentFloor}
        />

        <DoorsAndButtons>
          <ElevatorDoors>
            <DoorLeft
              doorsOpen={
                !elevator.isBusy && userAtFloor === elevator.currentFloor
              }
            />
            <DoorRight
              doorsOpen={
                !elevator.isBusy && userAtFloor === elevator.currentFloor
              }
            />
          </ElevatorDoors>

          <ElevatorButtons>
            {userAtFloor !== 0 && (
              <CircleButton onClick={callElevatorGoingDown}>
                <FontAwesomeIcon icon={['fas', 'arrow-down']} />
              </CircleButton>
            )}
            {userAtFloor !== 10 && (
              <CircleButton onClick={callElevatorGoingUp}>
                <FontAwesomeIcon icon={['fas', 'arrow-up']} />
              </CircleButton>
            )}
          </ElevatorButtons>
        </DoorsAndButtons>
      </ElevatorWrapper>
      {elevator.currentFloor === userAtFloor && (
        <EnterButton onClick={setUserInElevator}>Enter Elevator</EnterButton>
      )}
    </OuterWrapper>
  )
}

export default Elevator
