import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
