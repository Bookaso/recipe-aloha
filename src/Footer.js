import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const Body = styled.div`
        font-family:'Montserrat';
        font-weight:700;
        font-size: 0.9em;
        display:grid;
        place-items:center;
        color:#828282;
        height:5em;
    `
  return (
    <Body>created by Bookaso - devChallenges.io</Body>
  )
}

export default Footer