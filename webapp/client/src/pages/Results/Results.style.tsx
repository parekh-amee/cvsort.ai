import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  min-height: 100%;
  padding: 20px 60px;
  background-color: ${p => p.theme.colors.black}; /* Use black color for dark background */
  color: ${p => p.theme.colors.white}; /* White text for contrast */
`;

export const RTableContainer = styled.div`
  margin: 20px auto;
  padding: 10px;
  background-color: ${p => p.theme.colors.offwhite}; /* Light background for table */
  box-shadow: ${p => p.theme.shadows.small};
  border-radius: 8px; /* Rounded corners for a modern look */
`;

export const RButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  button {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: ${p => p.theme.colors.primary}; /* Darker or adjusted primary color */
    }
  }
`;
