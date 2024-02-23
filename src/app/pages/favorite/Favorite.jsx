import { useSelector } from "react-redux";
import { selectFavoriteList } from "../../../redux/favorite/selectors";
import { CarsList } from "../../components/cars-list/CarsList";

export const Favorite = () => {
  const favoriteList = useSelector(selectFavoriteList);
  return (
    <main>
      <CarsList cars={favoriteList} />
    </main>
  );
};
