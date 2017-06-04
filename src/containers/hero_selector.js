import React, {Component} from 'react'
import styled from 'styled-components'


const RadioHero = styled.input`
    display: none;

    &:checked + label {
        background: radial-gradient(${props => props.color} , transparent);
    }
`;

const LabelHero = styled.label`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
`;

const heroHeight = 32;
const heroWidth = 36;

const ImageHero = styled.img`
    width: ${heroHeight*1.5}px;
    height: ${heroWidth*1.5}px;
`;

const HeroList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Button = styled.input`
    background-color: transparent;
    border: 1px solid #c3c3c3;
    padding: 5px 10px;
    margin-top: 20px;

    &:hover {
        background-color: #fcfcfc;
        cursor: pointer;
        box-shadow: 0 3px 8px #c3c3c3;
    }
`;

const FormHero = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class HeroSelector extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedHero: 'captainamerica' }
    }

    renderHeroes() {
        const heroes=['captainamerica','hulk','wonderwoman','superman'];
        const colors = {
            captainamerica: 'blue',
            hulk: 'green',
            wonderwoman: 'yellow',
            superman: 'red'
        }
        return heroes.map((hero) => {
            return <div key={hero}>
                    <RadioHero 
                        type="radio"
                        name="hero" 
                        id={hero}
                        value={hero}
                        color={colors[hero]}
                        checked={this.state.selectedHero === hero} 
                        onChange={() => {this.setState({selectedHero: hero})}} />
                    <LabelHero htmlFor={hero}>
                        <ImageHero src={`../../assets/${hero}.png`} alt={hero} />
                    </LabelHero>
                </div>
        })
    }

    chooseHero(evt) {
        evt.preventDefault();
        console.log(this.state.selectedHero);
    }

    render() {
        return (
            <div>
                <h1>Select your hero</h1>
                <FormHero onSubmit={this.chooseHero.bind(this)}>
                    <HeroList>
                        {this.renderHeroes()}
                    </HeroList>
                    <Button type="submit" color="primary" value="Select" />
                </FormHero>
            </div>
        )
    }
}

export default HeroSelector;