import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  padding: 0 2rem 1rem 2rem;
  border-bottom: 4px solid #292a3e;
  border-radius: 15px;
  margin: 2rem 0 10rem 0;
  margin-bottom: 2rem;
`;

export const WrapperCards = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Card = styled.div<{ color: string }>`
  background-color: #292a3e;
  width: 100%;
  height: 15rem;
  padding: 2.5rem;
  color: ${({ color }) => (color ? color : '#fff')};
  border-radius: 15px;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Ball = styled.div<{ color: string }>`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : '#fff')};
  box-shadow: 2px 2px 5px #00000025;
`;
