import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #6d7e99;
`;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.6rem;
  margin: 1rem 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #45a049;
  }
`;
