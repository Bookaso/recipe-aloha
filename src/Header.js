import React from 'react';
import styled from 'styled-components';
import threeDot from './assets/6dots.svg'

import Information from './Information';

const Headers= styled.h1`
    font-family: 'Playfair Display';
    font-weight: 700;
    font-size:24px;
    margin-bottom:12px;
  `
const SubHeader = styled.div`
    display:flex;
    align-items:flex-start;

    img{
      margin:5px 12px 0 0;
    }
    p{
      font-family:'Montserrat';
      font-weight:500;
      font-size:12px;
      font-style:italic;
    }
  `

const Header = () => {
  return (
    <div className='header'>
      <Headers>Classic Cheesecake Recipe</Headers>
      <SubHeader>
        <img src={threeDot} alt='three-dot'/>
        <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
      </SubHeader>
      <Information />
    </div>
  )
}

export default Header