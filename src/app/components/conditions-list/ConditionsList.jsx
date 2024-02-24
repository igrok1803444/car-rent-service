import { getNumberFromString } from "../../../features/index";
import { ActionText } from "../../styles/ActionText";
import { ConditionsLI, ConditionsListStyled } from "./ConditionsList.styled";

export const ConditionsList = ({ listInfo }) => {
  const { rentalConditions, mileage, rentalPrice } = listInfo;

  const getAgeNumber = () => {
    const minimumAge = rentalConditions
      .split("\n")
      .find((item) => item.includes("Minimum age"));

    return getNumberFromString(minimumAge);
  };
  const prepareConditions = () => {
    return rentalConditions
      .split("\n")
      .filter((item) => !item.includes("Minimum age"));
  };
  const prepareMileage = () => {
    return `${Math.floor(mileage / 1000)},${mileage % 1000}`;
  };
  return (
    <ConditionsListStyled>
      <ConditionsLI>
        <p>
          Minimum age: <ActionText>{getAgeNumber()}</ActionText>
        </p>
      </ConditionsLI>

      {prepareConditions().map((item, index) => {
        return (
          <ConditionsLI key={index}>
            <p>{item}</p>
          </ConditionsLI>
        );
      })}

      <ConditionsLI>
        <p>
          Mileage: <ActionText>{prepareMileage()}</ActionText>
        </p>
      </ConditionsLI>
      <ConditionsLI>
        <p>
          Price: <ActionText>{getNumberFromString(rentalPrice)}$</ActionText>
        </p>
      </ConditionsLI>
    </ConditionsListStyled>
  );
};
