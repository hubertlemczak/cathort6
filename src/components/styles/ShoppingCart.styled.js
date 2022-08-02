import styled from 'styled-components';

import { fadeIn, fadeOut } from './Animations.styled';

export const StyledShoppingCart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 2;
  animation: ${({ fade }) => (fade ? fadeOut : fadeIn)} 200ms forwards ease;

  @media (max-width: 810px) {
    & {
      justify-content: center;
    }
  }
`;

export const StyledShoppingCartBg = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

export const StyledShoppingCartContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 360px;
  height: 95vh;
  background-color: rgb(255, 255, 255);
  margin-right: 20px;
  z-index: 3;

  @media (max-width: 810px) {
    & {
      margin-right: 0;
    }
  }
`;

export const StyledShoppingCartTab = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgb(185, 185, 185);
  box-shadow: 0 3px 5px rgb(202, 202, 202);
  width: 10.5rem;
  color: rgb(185, 185, 185);
  fill: rgb(185, 185, 185);
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `fill: black;
    color: black;
    border-bottom: 2px solid black;`}
`;

export const StyledShoppingCartCloseTab = styled(StyledShoppingCartTab)`
  width: 4rem;
  height: 4rem;
  fill: #000000;
`;

export const StyledShoppingCartContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: space-between;
  height: 93%;
`;

export const StyledShoppingCartItems = styled.div`
  overflow-y: scroll;
  max-height: 90%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledShoppingCartCheckout = styled.div`
  align-self: center;

  p {
    text-align: center;
    margin-bottom: 5px;
  }
`;
