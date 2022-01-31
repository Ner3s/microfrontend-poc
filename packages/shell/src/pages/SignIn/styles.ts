import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  padding: 2rem;
  background-color: #242537;
  border-radius: 0.8rem;
  box-shadow: 0 0 5px #00000065;
`;

export const Input = styled.input`
  border-radius: 0.5rem;
  height: 4.5rem;
  padding: 0 1.5rem;
  margin: 1rem 0;
  border: none;
  transition: all 200ms ease-in-out;

  &:not(:placeholder-shown) {
    border: 2px solid #393a4b;
  }

  &:placeholder-shown {
    border: none;
  }
`;

export const Button = styled.button`
  margin: 1rem 0;
  height: 4.5rem;
  background-color: #393a4b;
  color: #fff;
  border-radius: 0.8rem;

  :hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  color: #fff;
  margin: 1.5rem 0;
  text-shadow: 2px 3px 1px #393a4b;
`;
