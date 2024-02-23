import { useSelector } from "react-redux";
import { selectModalData } from "../../../redux/modal/selectors";
import { prepareAddress } from "../../../features";
import { InformationList } from "../information-list/InformationList";
import { ConditionsList } from "../conditions-list/ConditionsList";

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
    <div>
      <img
        src={img}
        alt={`${make} ${model} ${year} by ${rentalCompany}`}
        width={469}
      />
      <div>
        <p>
          {make}
          <span> {model}</span>, {year}
        </p>

        <InformationList dataArray={carInfoArray} />
        <p>{description}</p>
        <p> Accessories and functionalities:</p>
        <InformationList dataArray={[...accessories, ...functionalities]} />
        <p>Rental Condidions:</p>
        <ConditionsList listInfo={modalData} />
      </div>
    </div>
  );
};
