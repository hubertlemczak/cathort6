import styled from 'styled-components';

export const StyledCategoriesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 440px));
  grid-template-rows: repeat(auto-fit, minmax(300px, 540px));
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1250px) {
    & {
      grid-template-rows: repeat(auto-fit, minmax(300px, 440px));
    }
  }
  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(auto-fit, minmax(300px, 340px));
    }
  }
  @media (max-width: 650px) {
    & {
      grid-template-columns: 350px;
    }
  }
`;
