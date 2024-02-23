import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";
import { getNumberFromString } from "../../features";

export const selectCars = (state) => state.cars.cars.items;

export const selectIsLoading = (state) => state.cars.cars.isLoading;

export const selectPage = (state) => state.cars.cars.page;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const { mileage, price } = filter;
    const visibleCars = cars.filter((car) => {
      if (mileage.min === 0 && mileage.max === Infinity && price === Infinity) {
        return cars;
      }

      return (
        getNumberFromString(car.rentalPrice) <= price &&
        car.mileage >= mileage.min &&
        car.mileage <= mileage.max
      );
    });

    return visibleCars;
  }
);
