import styled from 'styled-components';

export const StyledProductContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  height: 450px;
  align-items: center;
  position: relative;

  &:nth-child(4n + 2) {
    height: 650px;
    max-width: 550px;
    img {
      height: 627px;
    }
  }

  &:nth-child(3n + 3) {
    height: 650px;
    justify-content: flex-end;
  }

  &:nth-child(3n + 2) {
    height: 650px;
    max-width: 550px;
    img {
      height: 627px;
    }
  }

  @media (max-width: 740px) {
    & {
      width: 350px;
      height: 420px !important;

      img {
        height: 394px !important;
      }
    }
  }

  img {
    width: 100%;
    height: 427px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 250px;
    position: absolute;
    display: none;
    bottom: 50px;
    border: none !important;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const StyledProductCardDetails = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
