import { getNumberFromString } from "../../../features/index";

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
    <ul>
      <li>
        <p>
          Minimum age: <span>{getAgeNumber()}</span>
        </p>
      </li>

      {prepareConditions().map((item, index) => {
        return (
          <li key={index}>
            <p>{item}</p>
          </li>
        );
      })}

      <li>
        <p>
          Mileage: <span>{prepareMileage()}</span>
        </p>
      </li>
      <li>
        <p>Price: {getNumberFromString(rentalPrice)}$</p>
      </li>
    </ul>
  );
};
