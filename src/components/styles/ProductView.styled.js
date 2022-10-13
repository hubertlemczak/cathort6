import styled from 'styled-components';

export const StyledProductViewContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  max-width: 60rem;
  margin-inline: auto;

  @media (max-width: 900px) {
    & {
      grid-template-columns: minmax(0, 460px);
      max-width: 28.75rem;
    }
  }

  img {
    height: 600px;
    object-fit: cover;
    margin-bottom: 5px;

    @media (max-width: 900px) {
      & {
        height: 500px;
      }
    }
  }
`;

export const StyledProductViewDetails = styled.div`
  div p {
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    padding-bottom: 10px;
  }
`;

export const StyledProductViewButtons = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: -1px;
    border: 1px solid black;
    height: 48.5px;
    width: 48px;
    padding: 8px;
    cursor: pointer;
  }
`;

export const StyledProductViewSelect = styled.select`
  padding: 10px;
  width: 100%;
  font-size: 1.4rem;
  margin-block: 30px;
`;
