import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Nav from "/src/components/layout/nav/nav";
import { StyledSection } from "./styles";

function Header(
  pageUrl // урл страницы
) {
  return (
    <StyledSection>
      <Logo />
      <Nav pageUrl={pageUrl} />
    </StyledSection>
  );
}

export default Header;
