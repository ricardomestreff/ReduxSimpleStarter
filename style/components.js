import styled from 'styled-components';

const heroHeight = 32;
const heroWidth = 36;


export const Container = styled.div`
    display: flex;
    flex-direction: ${props => (props.direction ? props.direction : 'column')};
    justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
    align-items: ${props => (props.align ? props.align : 'flex-start')};
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
    margin-top: 20px;

    &:hover {
        background-color: #fcfcfc;
        cursor: pointer;
        box-shadow: 0 3px 8px #c3c3c3;
    }
`;

export const HeroAvatar = styled.img`
    width: ${heroHeight*1.5}px;
    height: ${heroWidth*1.5}px;
`;

const Avatar = styled.img`
  width: ${heroHeight}px;
  height: ${heroWidth}px;
  margin: 5px;
  transition: all .2s ease-in-out;
  margin-top: ${props => props.votes}px;
  &:hover {
      cursor: pointer;
      transform: scale(1.2);
  }
`;