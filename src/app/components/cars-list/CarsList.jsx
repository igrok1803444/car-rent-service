import { CarsListStyled } from "./CarsList.styled";
import { ListItem } from "./list-item/ListItem";

export const CarsList = ({ cars }) => {
  return (
    <>
      <CarsListStyled>
        {cars.map((car) => {
          return <ListItem car={car} key={car.id} />;
        })}
      </CarsListStyled>
    </>
  );
};
