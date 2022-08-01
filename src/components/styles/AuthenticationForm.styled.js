import styled from 'styled-components';

export const StyledAuthenticaionForm = styled.div`
  width: clamp(340px, 45%, 500px);
  font-size: 1.3rem;

  @media (max-width: 930px) {
    button {
      margin: 0 auto;
    }
  }

  h2 {
    margin: 10px 0;
    font-weight: 400;
  }
`;

export const StyledAuthenticaionFormButtons = styled.div`
  display: flex;
  gap: 10px;
`;
