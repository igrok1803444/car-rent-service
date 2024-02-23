import { ListItem } from "./list-item/ListItem";

export const CarsList = ({ cars }) => {
  return (
    <>
      <ul>
        {cars.map((car) => {
          return <ListItem car={car} key={car.id} />;
        })}
      </ul>
    </>
  );
};
