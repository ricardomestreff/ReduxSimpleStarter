import React, { Component } from 'react';
import { presence, connected, database } from '../helpers/firebase'
import { heroes } from '../config/heroes'
import { Avatar, Container, Button } from '../../style/components'
import Hero from '../components/hero'

export default class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = null;
    this.vote = this.vote.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {

    // watch heroes changes
    database.ref('/heroes').on('value', snapshot => {
      this.setState({heroes: snapshot.val()});
    });

    // watch presence changes
    presence.on('value',snapshot => {
      this.setState({onlineUsers: snapshot.numChildren()});
    });
    
  }

  vote(hero) {
    var votes = (!this.state.heroes[hero] ? 1 : this.state.heroes[hero]+1);
    database.ref(`/heroes/${hero}`).set(votes);
  }

  shouldComponentUpdate(nextProps) {
      return !!(this.state && this.state.heroes);
  }

  renderHeroes() {
    const keys = Object.keys(heroes);
    return keys.map((key) => {
      const hero = heroes[key];
      const votes = this.state.heroes[hero.id];
      
      return <Hero key={key} id={key} hero={hero} votes={votes} onClick={this.vote} />
    });
  }

  reset() {
    const updates = {};
    const keys = Object.keys(heroes);
    keys.map(key => {
      updates[`/heroes/${key}`] = 0
    });
    database.ref().update(updates);
  }

  render() {
    
    if (!this.state || !this.state.heroes) {
      return <div>Loading app...</div>
    }

    return (
        <div>
          <h1>React Heroes</h1>
          <p>online users: {this.state.onlineUsers}</p>
          <Button type="button" value="Reset" onClick={this.reset} />
          <Container justify="space-around" direction="row">
            {this.renderHeroes()}
          </Container>
        </div>
    );
  }
}
