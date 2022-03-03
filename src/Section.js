import React from 'react'
import styled from 'styled-components'

const Section = () => {
    const Body = styled.div`
        font-family:'Playfair Display';
        font-weight:700;
        font-size: .563em;
        h1{
            font-size:2.7em;
        }
        div{
            margin:13px 0;
            h3{
                font-weight:400;
                font-style: italic;
                font-size: 1.78em;
            }
            .check-container{
                display:flex;
                justify-content:flex-start;
                width:100%;
                input{
                    width:23px;
                    height:21px;
                }
                p{
                    margin-left: 9px;
                    font-family:'Montserrat';
                    font-weight:400;
                    font-size: 1.55em;
                    width:100%;
                }
            }
        }
        @media only screen and (min-width: 819px) {
            width:50%;
        }
    `
  return (
    <Body>
        <h1>Ingredients</h1>
        <div>
            <h3>Graham Cracker Crust</h3>
            <div className='check-container'>
                <input type="checkbox" />
                <p>1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet graham crackers)</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>5 Tablespoons (70g) <strong>unsalted butter</strong>, melted</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>1/4 cup (50g) <strong>granulated sugar</strong></p>
            </div>
        </div>
        <div>
            <h3>Cheesecake</h3>
            <div className='check-container'>
                <input type="checkbox" />
                <p>four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong> softened to room temperature</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>1 cup (200g) <strong>granulated sugar</strong></p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>1 cup (240g) full-fat <strong>sour cream</strong> at room temperature</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>1 teaspoon <strong>pure vanilla extract</strong></p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>3 large <strong>eggs</strong> at room temperature</p>
            </div>
            <div className='check-container'>
                <input type="checkbox" />
                <p>topping suggestions:<em> salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</em> (recipe in notes)</p>
            </div>
        </div>
    </Body>
  )
}

export default Section