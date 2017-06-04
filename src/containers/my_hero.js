import React, {Component} from 'react'
import styled from 'styled-components'
import { presence, connected, database } from '../helpers/firebase'
import { Container } from '../../style/components'


const HeroButton = styled.img`
    width: 150px;
    height: 150px;
`;

class MyHero extends Component {

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
        database.ref('/heroes').on('value', snapshot => {
            this.setState({heroes: snapshot.val()});
        });

        // watch presence changes
        presence.on('value',snapshot => {
            this.setState({onlineUsers: snapshot.numChildren()});
        });
        
    }

    vote(hero) {
        var vote;
        console.log('voting', hero)
        vote = database.ref(`/heroes/${hero}`).push();
        vote.set({userId: this.state.userId, voted: true});
    }

    render() {
        return <Container direction="column" align="center">
            <h1>Tap your hero as fast as you can!</h1>
            <HeroButton src={`../../assets/captainamerica.png`} alt="Captain America" onClick={() => this.vote('captainamerica')} />
        </Container>
    }
}

export default MyHero;