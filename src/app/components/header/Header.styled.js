import styled from "styled-components";
import { NavLink as ReactRouteLink } from "react-router-dom";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  margin: 0 auto;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background.headerSection};
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 30px;

  justify-content: center;

  max-width: 600px;

  margin: 0 auto;

  text-align: center;
`;

export const NavLink = styled(ReactRouteLink)`
  display: block;

  padding: 12px 24px;

  width: 100%;
  max-width: 274px;

  background-color: ${({ theme }) => theme.colors.background.navLink};

  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.border.navLink};
  border-radius: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;

  color: ${({ theme }) => theme.colors.text.navLink};

  transition-property: background-color, color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.active {
    background-color: ${({ theme }) => theme.colors.background.navLinkActive};

    color: ${({ theme }) => theme.colors.text.navLinkActive};
  }
`;
