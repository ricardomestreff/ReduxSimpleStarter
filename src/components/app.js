import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Container from 'muicss/lib/react/container';
import RacingTrack from '../containers/racing_track'
import HeroSelector from '../containers/hero_selector'

export default class App extends Component {

  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={RacingTrack} />
            <Route path="/selectHero" component={HeroSelector}/>
          </Switch>
        </Router>
      </Container>
    )
  }
}
