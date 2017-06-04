import styled from 'styled-components';

const heroHeight = 48;
const heroWidth = 54;


export const Container = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : 'column')};
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
    align-items: ${props => (props.align ? props.align : 'flex-start')};
    margin: 1rem;
    padding: 0.5rem;
    text-align: ${props => (props.text ? props.text : 'inherit')};
    flex: 1;
    box-sizing: border-box;
    background-color: ${props => props.background || 'transparent'};
`;

export const HiddenRadio = styled.input`
    display: none;

    &:checked + label {
        background: radial-gradient(${props => props.color} , transparent);
    }
`;

export const SelectableLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 15px;
`;

export const Button = styled.input`
    background-color: transparent;
    border: 1px solid #c3c3c3;
    padding: 5px 10px;

    &:hover {
        background-color: #fcfcfc;
        cursor: pointer;
        box-shadow: 0 3px 8px #c3c3c3;
    }
`;


export const Avatar = styled.img`
  width: ${heroHeight}px;
  height: ${heroWidth}px;
  margin: 5px;
  transition: all .2s ease-in-out;
  transform: translateY(${props => props.votes || 0}px);
`;

export const ButtonAvatar = styled.button`
    background-color: ${props => props.color || 'transparent'};
    border: none;
    box-shadow: 0 0.4rem 1rem #c3c3c3;
    border-radius: 50%;
    width: ${heroHeight*3}px;
    height: ${heroHeight*3}px;

    &:active {
        box-shadow: 0 0 0;
        outline: none;
    }

    &:focus {
        outline: none;
    }
`;

export const H1 = styled.h1`
    margin-bottom: 3rem;
`;