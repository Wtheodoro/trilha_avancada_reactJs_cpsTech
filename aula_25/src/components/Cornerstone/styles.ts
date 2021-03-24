import styled from 'styled-components';

export const Container = styled.div`

    background: #131313;
    height: 100vh;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
        background: #131313;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    svg {
        font-size: 2rem;
        background: #131313;
        transition: all 0.3s;

        &:hover {
            font-size: 3rem;
        }
    }

    a {
        background: #131313;

    }

    a + a {
        margin-top: 4rem;
    }
`;
