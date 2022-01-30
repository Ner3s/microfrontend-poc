import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  border-bottom: 4px solid #292a3e;
  border-radius: 15px;
  margin: 2rem 0 10rem 0;
  margin-bottom: 2rem;
  padding: 0 2rem 1rem 2rem;
`;

export const Content = styled.div`
  background-color: #292a3e;
  border-radius: 15px;
  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 1rem 0;
  width: 32rem;
`;

export const TextArea = styled.textarea`
  background-color: #242537;
  border: none;
  border-radius: 1.5rem;
  color: #fff;
  padding: 2rem;
`;

export const Button = styled.button`
  background-color: #393a4b;
  border: none;
  border-radius: 1rem;
  color: #fff;
  height: 4rem;
  margin: 1rem 0;
  padding: 1rem;

  :hover {
    opacity: 0.8;
  }
`;
