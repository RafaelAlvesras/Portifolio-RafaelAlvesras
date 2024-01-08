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

export const StyledProjectsPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 75rem;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        height: 32rem;
        overflow: auto;
        gap: 1.5rem;
    }

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #595959;
        padding: 1rem;
        width: 90%;
        border-radius: 12px;

        .divTitleCardProject {
            display: flex;
            width: 100%;
            justify-content: space-between;

            img {
                width: 2.5rem;
                height: 2.5rem;
            }
        }
    }
`