import { HomeContainer, MainTitle, Nav, NavLink } from "./Home.styled";

export const Home = () => {
  return (
    <HomeContainer>
      <MainTitle>Rent your car</MainTitle>
      <Nav>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
      </Nav>
    </HomeContainer>
  );
};
