import styled from "styled-components";

interface ButtonProps {
    btnWidth: string;
    btnHeight: string;
    borderColor: string;
    textColor: string;
    hoverBorderColor: string;
    hoverTextColor: string;
    bgColor: string;
};

export const Button = styled.button<ButtonProps>`    
    width: ${props => props.btnWidth};
    height: ${props => props.btnHeight};
    color: ${props => props.textColor};
    background-color: ${props => props.bgColor};
    border: solid 1.3px;
    border-color: ${props => props.borderColor};
    border-radius: 5px;
    text-align: center;
    font-family: Roboto;
    font-weight: 500;    
    cursor: pointer;
    transition: border-color 0.3s, color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;    

    :focus {
        outline: none;
    }

    :hover {
        border-color: ${props => props.hoverBorderColor};        
        color: ${props => props.hoverTextColor};
    }
    
`