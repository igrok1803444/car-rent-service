import { useSelector } from "react-redux";
import { selectFavoriteList } from "../../../redux/favorite/selectors";
import { CarsList } from "../../components/cars-list/CarsList";
import { selectIsLoading } from "../../../redux/cars/selectors";
import { NoResultText } from "../../components/no-result- text/NoResultText";
import { Header } from "../../components/header/Header";

const Favorite = () => {
  const isLoading = useSelector(selectIsLoading);
  const favoriteList = useSelector(selectFavoriteList);
  return (
    <>
      <Header />

      <main>
        <div div className="container">
          {!isLoading && favoriteList.length === 0 && <NoResultText />}

          <CarsList cars={favoriteList} />
        </div>
      </main>
    </>
  );
};

export default Favorite;
