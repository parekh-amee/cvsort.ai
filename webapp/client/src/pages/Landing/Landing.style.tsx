import styled from 'styled-components';

export const LandingWrapper = styled.section`
  height: calc(100vh - 50px);
  background-color: #1a1a1a;
  background-image: radial-gradient(at 50% 100%, #2c2c2c, #121212);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10%;

  #home-left {
    width: 45%;
    text-align: left;
    padding-left: 2em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  #home-left h1 {
    letter-spacing: 2px;
    color: #fff;
    font-size: 2.5em;
    font-weight: 600;
    line-height: 1.5;
    border-bottom: 2px solid #6cbf43;
  }

  #home-left p {
    color: #b0b0b0;
    font-size: 1.2em;
    letter-spacing: 1px;
    font-weight: 300;
    line-height: 1.8em;
  }

  #home-right {
    margin: auto;

    img {
      transform: skewY(-3deg);
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;
