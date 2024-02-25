import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/filter/selectors";
import { useState } from "react";
import {
  setMakeFilter,
  setMileageFilterMax,
  setMileageFilterMin,
  setPriceFilter,
} from "../../../redux/filter/filterSlice";
import { getCars } from "../../../redux/cars/operations";
import { CarBrandSelect } from "./car-brand-select/CarBrandSelect";
import { CarPriceSelect } from "./car-price-select/CarPriceSelect";
import { InputLabel } from "../text/input-label/InputLabel";
import { CarMileage } from "./mileage-input/MileageInput";
import { Separator, SetMileageWrapper, Form } from "./FilterZone.styled";
import { Button } from "../button/Button";

export const FilterZone = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const [make, setMake] = useState("");
  const [price, setPrice] = useState(filter.price);

  const [mileageMin, setMileageMin] = useState(filter.mileage.min);
  const [mileageMax, setMileageMax] = useState(filter.mileage.max);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (make !== "") {
      dispatch(getCars({ make }));
    }
    if (make === "") {
      dispatch(getCars());
    }
    dispatch(setMakeFilter(make));
    dispatch(setPriceFilter(price));

    dispatch(setMileageFilterMin(mileageMin));
    dispatch(setMileageFilterMax(mileageMax));
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <InputLabel labelText={"Car brand"}>
          <CarBrandSelect setMake={setMake} />
        </InputLabel>

        <InputLabel labelText={"Price/1hour"}>
          <CarPriceSelect setPrice={setPrice} />
        </InputLabel>
        <InputLabel labelText="Car mileage/km">
          <SetMileageWrapper>
            <CarMileage
              name="mileage-min"
              setMileage={setMileageMin}
              prefix="From"
            />
            <Separator> </Separator>
            <CarMileage
              name="mileage-max"
              setMileage={setMileageMax}
              prefix="To"
            />
          </SetMileageWrapper>
        </InputLabel>
        <Button type="submit">Search</Button>
      </Form>
    </section>
  );
};
