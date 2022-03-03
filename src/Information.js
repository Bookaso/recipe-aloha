import React from 'react'
import styled from 'styled-components'
import image_1 from "./assets/photo1.png"
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

import Infocontainer from './Components/Infocontainer'

const Information = () => {
    const Info = styled.div`
    font-family:'Montserrat';
    font-weight: 700;
    position:relative;
        img{
            width:100%;
            margin:20px 0;
        }
        .sub-info{
            display:flex;
            justify-content:space-between;
        }
        @media only screen and (min-width: 819px) {
            .sub-info{
            flex-direction:column;
            }
            .info-container{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            box-shadow: 0px 0px 20px 0px #0000001A;
            width:216px;
            height:367px;
            border-radius:12px;
            position:absolute;
            right:0;
            }
        }
    `
  return (
    <Info>
        <img src={image_1} alt="cake"/>
        <div className='info-container'>
            <div>
                <Infocontainer icon={faUtensils} head='YIELDS' info='12 serving' color='notset'/>
            </div>
            <div className='sub-info'>
                <Infocontainer icon={faClock} head='PREP TIME' info='45 minutes' color='#333333'/>
                <Infocontainer icon={faClock} head='COOK TIME' info='1 hour' color='#333333'/>
                <Infocontainer icon={faClock} head='TOTAL TIME' info='7.75 hours' color='#333333'/>
            </div>
        </div>
    </Info>
  )
}

export default Information