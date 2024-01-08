import styled from "styled-components"

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 2rem;
    background-color: yellow;
    color: #191919;
    font-weight: 700;
    border: 1px solid yellow;
    border-radius: 0.75rem;
    cursor: pointer;

    &:hover {
        background-color: #191919;
        color: yellow;
        transition: 0.2s;
    }
    
`