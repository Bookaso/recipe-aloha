import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//component
const Infocontainer = ({icon, head, info, color}) => {

    const Card = styled.div`
        display: flex;
        align-items: center;
        color:${color === "notset" ? "#F2994A" : color};
        margin: 10px 0;
        h4{
            color:#BDBDBD;
            font-size: 0.6em;
        }
        p{
            font-size:0.8em;
            font-weight: 500;
            color:${color === "notset" ? "#F2994A" : color};
        }
        .icon{
            margin-right: 5px;
        }
        @media only screen and (min-width: 819px){
            margin: 24px 0;
            .icon{
            margin-right: 15px;
            font-size:1.5em;
            }
        }
    `
  return (
    <Card>
        <FontAwesomeIcon className='icon' icon={icon} />
        <div>
            <h4>{head}</h4>
            <p>{info}</p>
        </div>
    </Card>
  )
}

export default Infocontainer