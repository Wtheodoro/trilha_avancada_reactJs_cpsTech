import styled from 'styled-components';

export const Container = styled.div`

.top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #232323;
    
    h1 {
        color: #fb4b4f;
        background: #232323;
    }

    p {
        background: #232323;
    }


}

.container  {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 1200px;
    transform-style: preserve-3d;
}

.container .box {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 40px;
    background: #232323;
    border-radius: 20px;
    transform-style: preserve-3d;

    img {
        width: 100px;
    }

    p {
        background: #232323;
        border-radius: 20px;
    }
}

.container .box::after {
    content: '8)';
    position: absolute;
    bottom: 20px;
    right: 20px;
    font-size: 5em;
    font-weight: 900;
    color: #fff;
    font-style: italic;
    opacity: 0;
    transition: 0.5s;
}

.container .box:hover::before,
.container .box:hover::after {
    opacity: 0.04;
}

.container .box .name {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 100px); 
    transition: 0.5s;
    opacity: 0;
    z-index: 20;
}

.container .box:hover .name {
    background: #232323;
    top: 40px;
    opacity: 1;
}

.container .box .buy{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate3d(-50%, 0, 75px);
    color: #fff;
    background: #333;
    padding: 10px 25px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.5s;
    opacity: 0;
    z-index: 10;
}

.container .box:hover .buy {
    bottom: 30px;
    opacity: 1;
}

.container .box .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 0.5s;
    background: #fff;
    transform-style: preserve-3d;
    z-index: 10;
    opacity: 1;
    transform: translate3d(-50%, -50%, 40px);
}

.container .box .product {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 300px;
    transition: 0.5s;
    z-index: 11;
    transition: 0.5s;
    transform-style: preserve-3d;
    transform: translate3d(-50%, -50%, 50px);
}

.container .box:hover .product {
    transform: translate3d(-50%, -50%, 100px);
}


.container .box  .buy {
    background: #fb4b4f;
}

`;
