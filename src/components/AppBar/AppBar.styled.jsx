import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 4px;
  text-decoration: none;
  color: black;
  &.active {
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
  }
`;
