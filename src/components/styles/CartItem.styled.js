import styled, { css } from 'styled-components';

import { fadeInOut, slideRightFade } from './Animations.styled';

export const StyledCartFadeOut = styled.span`
  position: absolute;
  right: ${({ right }) => right}%;
  opacity: 0;
  transform: translateY(40px);
  animation: ${fadeInOut} 1200ms ease 200ms forwards;
`;

export const StyledCartItem = styled.div`
  list-style: none;
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  animation: ${({ remove }) =>
    remove &&
    css`
      ${slideRightFade} 700ms cubic-bezier(0.9, 0.31, 0, 1) forwards
    `};
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 120px;
  object-fit: cover;
`;

export const StyledRightItem = styled.div`
  flex: 1;
  max-width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const StyledItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const StyledItemButtons = styled.div`
  display: flex;
  justify-content: space-between;

  .item-love {
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: 200ms;

    &:hover {
      transition: 200ms;
      fill: rgb(255, 0, 111);
    }
  }

  .item-delete {
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: 200ms;

    &:hover {
      transition: 200ms;
      fill: rgb(205, 0, 0);
    }
  }

  .item-cart {
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: 200ms;

    &:hover {
      transition: 200ms;
      fill: rgb(18, 109, 255);
    }
  }
`;
