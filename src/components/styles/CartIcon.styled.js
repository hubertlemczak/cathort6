import styled from 'styled-components';

export const StyledCartIcon = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  span {
    position: absolute;
    font-size: 13px;
    font-weight: 600;
    bottom: 12px;
  }
`;
