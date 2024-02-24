import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderSection, Nav, NavLink } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <HeaderSection>
        <div className="container">
          <Nav>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>
          </Nav>
        </div>
      </HeaderSection>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
