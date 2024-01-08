import styled, { keyframes } from "styled-components";

const slideInFromRight = keyframes`
    from {
        transform: translateX(150%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
export const StyledHomePage = styled.main`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 80vh;

    .divImage{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 65%;
        border-radius: 0 50% 50% 0;
        background-color: #191919;
    }

    .divHomePageText {
        position: absolute;
        top: 45%;
        left: 50%;
    }

    .homePageTitle{
        position: absolute;
        top: 35%;
        left: 50%;
        width: 90%;
        max-width: 37rem;
        line-height: 150%;
        animation: ${slideInFromRight} 1s ease-in-out;

        span {
            color: yellow;
        }
    }

    .homePageText{
        font-size: 1rem;
        line-height: 150%;
        width: 90%;
        max-width: 37rem;
        animation: ${slideInFromRight} 1.5s ease-in-out;
    }

    .deskImg {
        animation: ${slideInFromRight} 1s ease-in-out;
        width: 47rem;
    }

    .mobImg{
        display: none;
    }

    button {
        animation: ${slideInFromRight} 5s ease-in-out;
    }
`