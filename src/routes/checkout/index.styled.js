import styled from 'styled-components';

export const StyledCheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 60rem;
  margin-inline: auto;

  @media (max-width: 900px) {
    & {
      grid-template-columns: minmax(0, 360px);
      max-width: 22.5rem;
      gap: 100px;
    }
  }
`;

export const StyledShoppingCart = styled.div`
  display: flex;
  max-width: 360px;

  @media (max-width: 810px) {
    & {
      justify-content: center;
    }
  }
`;

export const StyledShoppingCartContainer = styled.div`
  width: 100%;
  max-width: 360px;

  @media (max-width: 810px) {
    & {
      margin-right: 0;
    }
  }
`;

export const StyledShoppingCartContents = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    margin-top: 30px;
    font-weight: bold;
    font-size: 1.4rem;
  }
`;

export const StyledShoppingCartItems = styled.div`
  overflow-y: scroll;
  max-height: 60vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledPaymentForm = styled.div`
  label {
    font-size: 1.2rem;
  }

  input {
    border: 1px solid lightgray;
    padding: 10px;
    font-size: 1.2rem;
  }

  & div:first-child {
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
  }
`;

export const StyledPaymentFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & div:nth-child(2n + 1) {
    margin-right: 15px;
  }

  @media (max-width: 900px) {
    div {
      max-width: 172px;
    }
  }
`;

export const StyledPaymentFormGridItems = styled.div`
  display: flex;
  flex-direction: column;
`;
