import styled from 'styled-components';

export const StyledEmptyContainer = styled.div`
  margin: auto;
  max-width: 90%;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 15px;

    a button {
      width: 100%;
    }
  }
`;
