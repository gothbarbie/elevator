import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { push } from 'connected-react-router'
import { setUserAtFloor } from '../../actions/userActions'

const Nav = styled.nav`
  width: 100%;
  padding: 1rem;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
`

const Navigation = ({ push }) => (
  <Nav>
    EXIT - Stairs
    <ul>
      <li>
        <button onClick={() => push('/')}>Ground floor</button>
        <button onClick={() => push('/one')}>Floor One</button>
        <button onClick={() => push('/two')}>Floor Two</button>
        <button onClick={() => push('/three')}>Floor Three</button>
      </li>
    </ul>
  </Nav>
)

const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = {
  setUserAtFloor,
  push,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
