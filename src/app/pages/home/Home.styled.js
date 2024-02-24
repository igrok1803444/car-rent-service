import styled from "styled-components";
import { NavLink as ReactRouteLink } from "react-router-dom";

export const HomeContainer = styled.main`
  min-width: 100vh;
  min-height: 100vh;

  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url("./images/home-background/rental-car.jpg");

  background-color: rgba(255, 255, 255, 0.5);
  background-size: cover;
`;

export const MainTitle = styled.h1`
  max-width: 700px;
  width: max-content;

  margin: 0 auto;

  font-size: 36px;

  color: white;
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 30px;

  justify-content: center;

  max-width: 600px;

  margin: 0 auto;

  margin-top: 36px;

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
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.navLinkActive};

    color: ${({ theme }) => theme.colors.text.navLinkActive};
  }
`;
