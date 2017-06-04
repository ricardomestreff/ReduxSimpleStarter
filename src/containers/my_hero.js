import React, {Component} from 'react'
import styled from 'styled-components'
import { presence, connected, database } from '../helpers/firebase'
import { Container, ButtonAvatar, Avatar, H1 } from '../../style/components'


class MyHero extends Component {

    componentDidMount() {

        // Get user Id
        const userRef = presence.push();

        //register connections and disconnections
        connected.on('value', snapshot => {
        if (snapshot.val()) {
            userRef.onDisconnect().remove();
            userRef.set(true);
        }
        });

        // watch heroes changes
        database.ref('/heroes/captainamerica').on('value', snapshot => {
            this.setState({votes: snapshot.val()});
        });

        // watch presence changes
        presence.on('value',snapshot => {
            this.setState({onlineUsers: snapshot.numChildren()});
        });
        
    }

    vote(hero) {
        var updates = {}
        updates[`/heroes/${hero}`] = this.state.votes+1
        database.ref().update(updates);
    }

    render() {
        return (
            <Container direction="column" align="center" justify="center" text="center">
                <H1>Tap your hero as fast as you can!</H1>
                <ButtonAvatar>
                    <Avatar 
                        src={`../../assets/captainamerica.png`} 
                        alt="Captain America" 
                        onClick={() => this.vote('captainamerica')} 
                    />
                </ButtonAvatar>
            </Container>
        )
    }
}

export default MyHero;