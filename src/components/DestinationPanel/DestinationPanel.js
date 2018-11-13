import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { DIRECTION } from '../../constants'

import { callToFloor } from '../../actions/elevatorActions'

import CircleButton from '../CircleButton'

const PanelGrid = styled.section`
  background-color: #ddd;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  width: 10vw;
  justify-items: center;
`
class DestinationPanel extends React.Component {
  handleClick = targetFloor => {
    const { callToFloor, user } = this.props

    if (targetFloor === user.atFloor) return

    const direction = user.atFloor < targetFloor ? DIRECTION.UP : DIRECTION.DOWN

    callToFloor({ shaftNr: user.insideElevatorNr, targetFloor, direction })
  }

  render() {
    const { user } = this.props

    return (
      <PanelGrid>
        <CircleButton
          active={user.atFloor === 9}
          onClick={() => this.handleClick(9)}
        >
          9
        </CircleButton>
        <CircleButton
          active={user.atFloor === 10}
          onClick={() => this.handleClick(10)}
        >
          10
        </CircleButton>
        <CircleButton
          active={user.atFloor === 7}
          onClick={() => this.handleClick(7)}
        >
          7
        </CircleButton>
        <CircleButton
          active={user.atFloor === 8}
          onClick={() => this.handleClick(8)}
        >
          8
        </CircleButton>
        <CircleButton
          active={user.atFloor === 5}
          onClick={() => this.handleClick(5)}
        >
          5
        </CircleButton>
        <CircleButton
          active={user.atFloor === 6}
          onClick={() => this.handleClick(6)}
        >
          6
        </CircleButton>
        <CircleButton
          active={user.atFloor === 3}
          onClick={() => this.handleClick(3)}
        >
          3
        </CircleButton>
        <CircleButton
          active={user.atFloor === 4}
          onClick={() => this.handleClick(4)}
        >
          4
        </CircleButton>
        <CircleButton
          active={user.atFloor === 1}
          onClick={() => this.handleClick(1)}
        >
          1
        </CircleButton>
        <CircleButton
          active={user.atFloor === 2}
          onClick={() => this.handleClick(2)}
        >
          2
        </CircleButton>
        <CircleButton
          active={user.atFloor === 0}
          onClick={() => this.handleClick(0)}
        >
          B
        </CircleButton>
      </PanelGrid>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = {
  callToFloor,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DestinationPanel)
