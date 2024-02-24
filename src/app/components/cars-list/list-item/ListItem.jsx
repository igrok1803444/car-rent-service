import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../redux/modal/modalSlice";
import { checkFavorite, prepareAddress } from "../../../../features/index";
import { InformationList } from "../../information-list/InformationList";
import { selectFavoriteList } from "../../../../redux/favorite/selectors";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../../redux/favorite/favoriteSlice";
import {
  CarData,
  CarHeaderWrapper,
  CarName,
  Icon,
  IconButton,
  LI,
} from "./ListItem.styled";
import { Button } from "../../button/Button";
import { ActionText } from "../../../styles/ActionText";
import { Img } from "../../../styles/Img";

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
    <LI>
      <IconButton type="button" className={isFavorite} onClick={handleFavorite}>
        <Icon className={isFavorite} />
      </IconButton>
      <Img
        loading="lazy"
        src={img}
        alt={`${make} ${model} ${year} by ${rentalCompany}`}
        width={274}
        height={268}
      />
      <CarData>
        <CarHeaderWrapper>
          <CarName>
            {make}
            <ActionText> {model}</ActionText>, {year}
          </CarName>
          <p>{rentalPrice}</p>
        </CarHeaderWrapper>
        <InformationList dataArray={carInfoList} />
        <Button type="button" onClick={handleClick}>
          Learn more
        </Button>
      </CarData>
    </LI>
  );
};
