import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    border-bottom: 1.5px solid yellow;
    
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        max-width: 75rem;
    }

    .divButtons {
        display: flex;
        width: 40%;
        justify-content: space-between;
    }
`