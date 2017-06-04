import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';


import { presence, connected, heroes, database } from '../helpers/firebase'

import Heroes from './heroes'
import Stats from './stats'

export default class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = null;
  }

  componentDidMount() {

    // Get user Id
    const userRef = presence.push();
    this.setState({userId: userRef.key});

    //register connections and disconnections
    connected.on('value', snapshot => {
      if (snapshot.val()) {
        userRef.onDisconnect().remove();
        userRef.set(true);
      }
    });

    // watch heroes changes
    heroes.on('value', snapshot => {
      this.setState({heroes: snapshot.val()});
    });

    // watch presence changes
    presence.on('value',snapshot => {
      this.setState({onlineUsers: snapshot.numChildren()});
    });
    
  }

  vote(hero) {
    var vote;
    vote = database.ref(`/heroes/${hero}`).push();
    vote.set({userId: this.state.userId, voted: true});
  }

  shouldComponentUpdate(nextProps) {
      return !!(this.state && this.state.heroes);
  }

  render() {
    if (!this.state || !this.state.heroes) {
      return <div>Loading app...</div>
    }

    return (
        <Container>
          <h1>React Heroes</h1>
          <Heroes heroes={this.state.heroes} onVote={this.vote.bind(this)} />
          <Stats stats={this.state}/>
        </Container>
    );
  }
}
