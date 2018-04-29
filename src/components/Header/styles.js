import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: cyan;
`;

export const StyledNavList = styled.ul`
  display: flex;
  flex-flow: row;
  width: 100%;
  justify-content: center;
  margin: 10px auto 3px auto;
`;
export const StyledNavItem = styled.li`
  list-style-type: none;
  margin-right: 5%; 
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 35px;
  text-decoration: none;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    color: black;
  }
  &.active {
    color: black;
    opacity: 1;
    border-bottom: 3px solid black;
  }
`;
export const StyledLogoTitle = styled.span`
  position: relative;
  top: 5px;
  left: 10px;
  color: white;
  font-size: 35px;
`;
