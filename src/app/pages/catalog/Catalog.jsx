import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars, loadMore } from "../../../redux/cars/operations";
import {
  selectIsLoading,
  selectPage,
  selectVisibleCars,
} from "../../../redux/cars/selectors";
import { CarsList } from "../../components/cars-list/CarsList";
import ReactModal from "react-modal";
import { selectModalIsOpen } from "../../../redux/modal/selectors";
import { closeModal } from "../../../redux/modal/modalSlice";
import { ModalInfo } from "../../components/modal/ModalInfo";
import { FilterZone } from "../../components/filter-zone/FilterZone";
import { selectFilter } from "../../../redux/filter/selectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const modalIsOpen = useSelector(selectModalIsOpen);
  const page = useSelector(selectPage);
  const { make } = useSelector(selectFilter);
  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(getCars());
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <main>
        <FilterZone></FilterZone>
        {!isLoading && cars.length > 0 && <CarsList cars={cars} />}
        {!isLoading && cars.length >= 12 && (
          <button
            type="button"
            onClick={() => {
              dispatch(loadMore({ page, make }));
            }}
          >
            Load More
          </button>
        )}
      </main>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.body}
      >
        <ModalInfo></ModalInfo>
      </ReactModal>
    </>
  );
};
