import ReactSelect, { components } from "react-select";
import { CarPriceSelectStyles } from "./CarPriceSelect.styled";

const setPriceOptions = () => {
  const priceOptions = [];
  for (let index = 0; index <= 1000; index += 10) {
    priceOptions.push({ label: index, value: index });
  }
  return priceOptions;
};

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>To {children} $</components.SingleValue>
);
export const CarPriceSelect = ({ setPrice }) => {
  return (
    <ReactSelect
      placeholder="To $"
      styles={CarPriceSelectStyles}
      options={setPriceOptions()}
      blurInputOnSelect={true}
      menuShouldScrollIntoView={false}
      closeMenuOnSelect={true}
      name="price"
      isSearchable={false}
      components={{ SingleValue }}
      onChange={(event) => {
        if (!event || event?.value === 0) {
          setPrice(Infinity);
          return;
        }
        setPrice(event.value);
      }}
    />
  );
};
