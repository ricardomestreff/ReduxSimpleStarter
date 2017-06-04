import React from 'react'
import styled from 'styled-components'

const heroHeight = 32;
const heroWidth = 36;

const Hero = styled.div`
    display: flex;
`;

const Avatar = styled.img`
  width: ${heroHeight}px;
  height: ${heroWidth}px;
  margin: 5px;
  transition: all .2s ease-in-out;
  margin-top: ${props => props.votes}px;
  &:hover {
      cursor: pointer;
      transform: scale(1.2);
  }
`;



export default ({img, description, votes, onHeroClick}) => {
    return (
        <Hero>
            <Avatar src={img} alt={description} onClick={onHeroClick} votes={votes}/>
            <span>{votes}</span>
        </Hero>
    )
}