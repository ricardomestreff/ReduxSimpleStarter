import React, { Component } from 'react'
import { Avatar } from '../../style/components'


export default class Hero extends Component {

    shouldComponentUpdate(nextProps) {
      return this.props.votes != nextProps.votes;
    }

    render() {
        
        const { hero, votes, onClick } = this.props;

        return <Avatar 
            src={`../../assets/${hero.id}.png`} 
            alt={hero.name} 
            votes={votes} 
            onClick={() => {onClick(hero.id)}} />
    }
}