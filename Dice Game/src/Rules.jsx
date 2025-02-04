import React from 'react'
import styled from 'styled-components'

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play the Dice Game</h2>
            <div className='text'>
                <ul className='list-disc'>
                    <li>Select any number</li>
                    <li>Click on dice image</li>
                    <li>If selected number is equal to Dice number, you will get same point as the number you got on the Dice{""}</li>
                    <li>If you get wrong guess, then 2 points will be deducted</li>
                </ul>

            </div>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
max-width:800px;
margin:10px auto;
background-color: gray;
padding: 20px; 
margin-top:4px;
padding-left:40px;
border-radius:10px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top:10px;
}`;
