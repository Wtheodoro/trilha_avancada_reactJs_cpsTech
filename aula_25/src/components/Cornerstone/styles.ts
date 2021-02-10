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

    .each-icon {
        margin-top: 20px;
    }

    svg {
        font-size: 30px;
    }
`;
