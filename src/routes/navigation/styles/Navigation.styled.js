import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 15px 10px;
  top: 0;
  z-index: 3;
  background-color: rgba(255, 255, 255, 0.783);

  & > a {
    width: 90px;

    & > svg {
      width: 80px;
      fill: ${({ theme }) => theme.color.primary};
    }
  }

  .nav-links-container {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: flex-end;

    .nav-link {
      font-size: 1.2rem;
      cursor: pointer;
      color: black;
    }
  }
`;

export const StyledNavLinks = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: flex-end;
  list-style: none;

  li {
    font-size: 1.2rem;
    cursor: pointer;

    a {
      color: black;
    }
  }
`;
