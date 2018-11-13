import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { hideModal } from '../../actions/modalActions'

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.section`
  background-color: #222;
  border-radius: 2px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  max-width: 80vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Modal extends React.PureComponent {
  handleClick = event => {
    if (event.target.id === 'backdrop') {
      this.props.hideModal()
    }
  }

  render() {
    const { children } = this.props
    return (
      <ModalWrapper id="backdrop" onClick={this.handleClick}>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    )
  }
}

const mapDispatchToProps = {
  hideModal,
}

export default connect(
  null,
  mapDispatchToProps
)(Modal)
