import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  min-height: 60px;
  background-color: #1a1a1a; /* dark background */
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #333;

  a {
    transition: 0.2s ease-in-out;
    color: #e0e0e0;
    text-decoration: none;

    &:hover {
      transform: scale(1.05);
      color: #6cbf43; /* soft green accent */
    }
  }

  a,
  button {
    color: #e0e0e0;
    padding: 0 20px;
    font-size: 17px;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  .brand__info {
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    font-weight: bold;
    font-size: 18px;
  }
`;
