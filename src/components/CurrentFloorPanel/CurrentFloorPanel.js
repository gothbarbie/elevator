import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DIRECTION } from '../../constants'

const Directions = styled.div`
  display: flex;
  align-items: center;
  background-color: #222;
  padding: 0.5rem;
`

const Direction = styled.div`
  font-size: 3rem;
  line-height: 3rem;
  color: #ccc;
  color: ${({ active }) => active && '#fff'};
`

const CurrentFloor = styled.div`
  margin: 0 1rem;
  font-size: 4rem;
  color: #fff;
`

const CurrentFloorPanel = ({ direction, currentFloor }) => (
  <Directions>
    <Direction active={direction === DIRECTION.UP}>
      <FontAwesomeIcon icon={['fas', 'arrow-up']} />
    </Direction>
    <CurrentFloor>{currentFloor}</CurrentFloor>
    <Direction active={direction === DIRECTION.DOWN}>
      <FontAwesomeIcon icon={['fas', 'arrow-down']} />
    </Direction>
  </Directions>
)

export default CurrentFloorPanel
