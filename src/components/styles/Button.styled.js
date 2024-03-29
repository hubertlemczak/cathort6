import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${({ buttonType }) => buttonType.normal}

  &:hover {
    ${({ buttonType }) => buttonType.hover}
  }

  span {
    font-family: Barlow Condensed;
    font-weight: 400;
  }
`;
