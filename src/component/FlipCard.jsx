import React, { useState } from 'react';
import styled from 'styled-components';

const FlipImageCountainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d ;
  transition: 0.5s;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  `

const FrontImage = styled.img`
width: 100%;
height: 100%;
backface-visibility: hidden;
position: absolute;
`

const BackImage = styled.img`
width: 100%;
height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`
const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <div>
        <FlipImageCountainer flipped={flipped ? 'flip' : ''}>
          <FrontImage src={front} />
          <BackImage src={back} />
        </FlipImageCountainer>
        <button
          onClick={() => setFlipped(prev => !prev)}
        >Flip</button>
    </div>
  );
};

export default FlipCard;