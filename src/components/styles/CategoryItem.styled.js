import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCategoryBGImage = styled.div`
  transition: transform 0.7s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  width: 100%;
  height: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center;
`;

export const StyledCategoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.594);
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #000000;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const StyledCategoryItemContainer = styled(Link)`
  width: clamp(300px, 100%, 440px);
  height: 540px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms ease;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.076);

  @media (max-width: 1250px) {
    & {
      height: 440px;
    }
  }

  @media (max-width: 1000px) {
    & {
      height: 340px;
    }
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: transform 300ms ease;

    & ${StyledCategoryBGImage} {
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${StyledCategoryBodyContainer} {
      background-color: rgba(255, 255, 255, 0.846);
    }
  }
`;
