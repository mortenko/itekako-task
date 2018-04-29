import React from "react";
import {
  StyledLogoTitle,
  StyledHeader,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledLink
} from "./styles";

const Header = () => (
  <StyledHeader>
    <StyledLogoTitle>
      <StyledLink to="/">Offices </StyledLink>
    </StyledLogoTitle>
    <StyledNavList>
      <StyledNavItem>
        <StyledNavLink to="/listView"> List </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to="/gridView"> Grid </StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to="/Map"> Map </StyledNavLink>
      </StyledNavItem>
    </StyledNavList>
  </StyledHeader>
);

export default Header;
