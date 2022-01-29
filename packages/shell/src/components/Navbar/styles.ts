import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: #292a3e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 8rem);
  left: 4rem;
  position: fixed;
  top: 4rem;
  width: 6rem;
  z-index: 1;
`;

export const Link = styled.a<{ isActive?: boolean }>`
  width: 4rem;
  height: 4rem;
  margin: 2rem;
  color: #ffffff50;

  :hover {
    color: #fff;
    opacity: 0.8;
    transition: all 200ms ease-in-out;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      & {
        color: #fff;
      }
    `}

  svg {
    width: 100%;
    height: 100%;
  }
`;
