// import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #222;
  border: 2px solid #ccc;
  border: 2px solid ${({ active }) => active && '#fff'};
  box-shadow: ${({ active }) => active && '0 0 3px 2px #fff'};
  border-radius: 50%;
  color: #ccc;
  color: ${({ active }) => active && '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  height: 5rem;
  width: 5rem;
  padding: 0;
  outline: none;
  cursor: pointer;
`

export default Button
