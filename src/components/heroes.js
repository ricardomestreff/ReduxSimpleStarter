import React from 'react'
import styled from 'styled-components'
import Panel from 'muicss/lib/react/panel';

import Hero from './hero'

const HeroesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: space-around;
`;

export default ({onVote, heroes}) => {

    const myHeroes = [
        'captainamerica',
        'hulk',
        'wonderwoman',
        'superman'
    ];


    const click = (hero) => {
        onVote(hero);
    }

    const renderHeroes = () => {
        return myHeroes.map((hero) => {
            return <Hero 
                key={hero} 
                img={`../../assets/${hero}.png`} 
                description={hero} 
                onHeroClick={() => {onVote(hero)}} 
                votes={(heroes.hasOwnProperty(hero) ? Object.keys(heroes[hero]).length : 0)} 
            />
        });
    }

    return (
        <Panel>
            <h4>Choose your hero...</h4>
            <HeroesList>
                {renderHeroes()}
            </HeroesList>
        </Panel>
    )
}