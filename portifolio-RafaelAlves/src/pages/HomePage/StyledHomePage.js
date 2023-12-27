import styled from "styled-components"

export const StyledHomePage = styled.main`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 80vh;

    .divImage{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 65%;
        border-radius: 0 50% 50% 0;
        background-color: #191919;
    }

    .deskImg {
        width: 47rem;
    }

    .mobImg{
        display: none;
    }
`