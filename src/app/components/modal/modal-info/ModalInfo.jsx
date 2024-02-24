import { useSelector } from "react-redux";
import { selectModalData } from "../../../../redux/modal/selectors";
import { prepareAddress } from "../../../../features";
import { InformationList } from "../../information-list/InformationList";
import { ConditionsList } from "../../conditions-list/ConditionsList";
import { Img } from "../../../styles/Img";
import { ActionText } from "../../../styles/ActionText";
import {
  ModalCarDescription,
  ModalCarInfoWrapper,
  ModalCarName,
  ModalCloseIcon,
  ModalInfoWrapper,
  ModalLink,
  ModalSubTitle,
} from "./ModalInfo.styled";

export const ModalInfo = () => {
  const modalData = useSelector(selectModalData);
  const {
    img,
    make,
    year,
    model,

    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
  } = modalData;

  const carInfoArray = [
    prepareAddress(address)[1],
    prepareAddress(address)[2],
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];
  return (
    <ModalInfoWrapper>
      <ModalCloseIcon />
      <Img
        src={img}
        alt={`${make} ${model} ${year} by ${rentalCompany}`}
        max-width={460}
      />
      <ModalCarInfoWrapper>
        <ModalCarName>
          {make}
          <ActionText> {model}</ActionText>, {year}
        </ModalCarName>
        <InformationList
          styles={{ maxWidth: "300px", marginBottom: "14px" }}
          dataArray={carInfoArray}
        />
        <ModalCarDescription>{description}</ModalCarDescription>
        <ModalSubTitle> Accessories and functionalities:</ModalSubTitle>

        <InformationList
          styles={{ marginTop: "8px", marginBottom: "0" }}
          dataArray={[...accessories, ...functionalities]}
        />
        <ModalSubTitle>Rental Condidions:</ModalSubTitle>
        <ConditionsList listInfo={modalData} />
        <ModalLink href="tel:+380730000000">Rental car</ModalLink>
      </ModalCarInfoWrapper>
    </ModalInfoWrapper>
  );
};
