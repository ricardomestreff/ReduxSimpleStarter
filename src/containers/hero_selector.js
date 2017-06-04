import React, {Component} from 'react'
import SelectableHero from '../components/selectable_hero'
import { Button, Container, H1 } from '../../style/components';
import { heroes } from '../config/heroes'


class HeroSelector extends Component {

    constructor(props) {
        super(props)
        this.state = {selectedHero: 'captainamerica'};
    }

    renderHeroes() {
        
        const keys = Object.keys(heroes);

        return keys.map((key) => {
            const hero = heroes[key];
            return <SelectableHero key={hero.id} id={hero.id} name={hero.name} color={hero.color} selected={this.state.selectedHero === hero.id} onCheck={() => {this.selectHero(hero.id)}} />
        });
    }

    selectHero(hero) {
        this.setState({selectedHero: hero})
    }

    chooseHero(evt) {
        evt.preventDefault();
    }

    render() {

        if (!this.state) return <div></div>

        return (
            <Container text="center" direction="column" justify="center" align="center">
                <H1>Choose your hero:</H1>
                <form onSubmit={this.chooseHero.bind(this)}>
                    <Container direction="column" justify="center" align="center">
                        <Container direction="row" justify="space-around">
                            {this.renderHeroes()}
                        </Container>
                        <Button type="submit" color="primary" value="Select" />
                    </Container>
                </form>
            </Container>
            
        )
    }
}

export default HeroSelector;