import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { selectFilter } from "../../../redux/filter/selectors";
import { useState } from "react";
import {
  setMakeFilter,
  setMileageFilterMax,
  setMileageFilterMin,
  setPriceFilter,
} from "../../../redux/filter/filterSlice";
import { getCars } from "../../../redux/cars/operations";
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

const setPriceOptions = () => {
  const priceOptions = [];
  for (let index = 0; index <= 1000; index += 10) {
    priceOptions.push({ label: `${index}$`, value: index });
  }
  return priceOptions;
};

export const FilterZone = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const [make, setMake] = useState("");
  const [price, setPrice] = useState(filter.price);

  const [mileageMin, setmileageMin] = useState(filter.mileage.min);
  const [mileageMax, setmileageMax] = useState(filter.mileage.max);

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    switch (inputName) {
      case "mileage-min":
        setmileageMin(inputValue);
        break;
      case "mileage-max":
        setmileageMax(inputValue);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (make !== "") {
      dispatch(getCars({ make }));
    }
    dispatch(setMakeFilter(make));
    dispatch(setPriceFilter(price));

    dispatch(setMileageFilterMin(mileageMin));
    dispatch(setMileageFilterMax(mileageMax));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <ReactSelect
          defaultValue={Infinity}
          options={producentOptions}
          blurInputOnSelect={true}
          placeholder="Enter the text"
          name="make"
          onChange={(event) => {
            if (!event) {
              return setMake(Infinity);
            }
            setMake(event.value);
          }}
          isClearable={true}
        />
        <label>
          To
          <ReactSelect
            options={setPriceOptions()}
            blurInputOnSelect={true}
            placeholder=" $"
            name="price"
            onChange={(event) => {
              if (!event) {
                return setPrice(Infinity);
              }
              setPrice(event.value);
            }}
            isClearable={true}
          />
        </label>
        <div>
          <label>
            From
            <input type="text" name="mileage-min" onChange={handleChange} />
          </label>
          <label>
            To
            <input type="text" name="mileage-max" onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
