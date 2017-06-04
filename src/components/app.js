import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import RacingTrack from '../containers/racing_track'
import HeroSelector from '../containers/hero_selector'
import MyHero from '../containers/my_hero'
import { Container } from '../../style/components'

export default class App extends Component {

  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={HeroSelector} />
            <Route path="/race" component={RacingTrack}/>
            <Route path="/myhero" component={MyHero} />
          </Switch>
        </Router>
      </Container>
    )
  }
}
