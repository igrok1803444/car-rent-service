import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../redux/modal/modalSlice";
import { checkFavorite, prepareAddress } from "../../../../features/index";
import { InformationList } from "../../information-list/InformationList";
import { selectFavoriteList } from "../../../../redux/favorite/selectors";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../../redux/favorite/favoriteSlice";

export const ListItem = ({ car }) => {
  const dispatch = useDispatch();
  const {
    img,
    make,
    year,
    model,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
  } = car;
  const favoriteList = useSelector(selectFavoriteList);
  const checkPremium = (accessories) => {
    const result = accessories.find((accessory) => {
      return accessory.toLowerCase().includes("premium");
    });

    if (result) {
      return "Premium";
    } else return null;
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(openModal(car));
  };
  const carInfoList = [
    prepareAddress(address)[1],
    prepareAddress(address)[2],
    rentalCompany,
    checkPremium(accessories),
    type,
    make,
    id,
    functionalities[0],
  ];

  const isFavorite = checkFavorite(id, favoriteList);
  const handleFavorite = (event) => {
    event.preventDefault();

    if (event.target.className.includes("favorite")) {
      dispatch(removeFromFavorite(car));
      return event.target.classList.remove("favorite");
    }
    dispatch(addToFavorite(car));
    event.target.classList.add("favorite");
  };
  return (
    <li onClick={handleClick}>
      <button type="button" className={isFavorite} onClick={handleFavorite}>
        Learn more
      </button>
      <img
        loading="lazy"
        src={img}
        alt={`${make} ${model} ${year} by ${rentalCompany}`}
        width={274}
        height={268}
      />
      <div>
        <div>
          <p>
            {make}
            <span> {model}</span>, {year}
          </p>
          <p>{rentalPrice}</p>
        </div>
        <InformationList dataArray={carInfoList} />
        <button type="button" onClick={handleClick}>
          Learn more
        </button>
      </div>
    </li>
  );
};
