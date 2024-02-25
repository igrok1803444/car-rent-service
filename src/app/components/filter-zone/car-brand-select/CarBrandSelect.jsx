import ReactSelect from "react-select";
import { CarBrandSelectStyles } from "./CarBrandSelect.styled";

const producentOptions = [
  { label: "Buick", value: "buick" },
  { label: "Volvo", value: "volvo" },
  { label: "HUMMER", value: "hummer" },
  { label: "Subaru", value: "subaru" },
  { label: "Mitsubishi", value: "mitsubishi" },
  { label: "Nissan", value: "nissan" },
  { label: "Lincoln", value: "lincoln" },
  { label: "GMC", value: "gmc" },
  { label: "Hyundai", value: "hyundai" },
  { label: "MINI", value: "mini" },
  { label: "Bentley", value: "bentley" },
  { label: "Mercedes-Benz", value: "mercedes-benz" },
  { label: "Aston Martin", value: "aston-martin" },
  { label: "Pontiac", value: "pontiac" },
  { label: "Lamborghini", value: "lamborghini" },
  { label: "Audi", value: "audi" },
  { label: "BMW", value: "bmw" },
  { label: "Chevrolet", value: "chevrolet" },
  { label: "Mercedes-Benz", value: "mercedes-benz" },
  { label: "Chrysler", value: "chrysler" },
  { label: "Kia", value: "kia" },
  { label: "Land", value: "land" },
];

export const CarBrandSelect = ({ setMake }) => {
  return (
    <ReactSelect
      styles={CarBrandSelectStyles}
      options={producentOptions}
      menuShouldScrollIntoView={false}
      blurInputOnSelect={true}
      closeMenuOnSelect={true}
      placeholder="Enter the text"
      name="make"
      onChange={(event) => {
        if (!event) {
          setMake("");

          return;
        }
        setMake(event.value);
      }}
      isClearable={true}
    />
  );
};
