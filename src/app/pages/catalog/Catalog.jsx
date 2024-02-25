import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../../redux/cars/operations";
import {
  selectIsLoading,
  selectVisibleCars,
} from "../../../redux/cars/selectors";
import { CarsList } from "../../components/cars-list/CarsList";
import ReactModal from "react-modal";
import { selectModalIsOpen } from "../../../redux/modal/selectors";
import { closeModal } from "../../../redux/modal/modalSlice";
import { FilterZone } from "../../components/filter-zone/FilterZone";

import { LoadMore } from "../../components/load-more/LoadMore";
import { Preview } from "./Catalog.styled";
import { ModalInfo } from "../../components/modal/modal-info/ModalInfo";
import { ModalStyles } from "../../components/modal/Modal.styled";
import { NoResultText } from "../../components/no-result- text/NoResultText";
import { RingLoader } from "react-spinners";
import { theme } from "../../styles/theme";
import { Header } from "../../components/header/Header";

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const modalIsOpen = useSelector(selectModalIsOpen);

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
      <Header />
      <main>
        <div className="container">
          <FilterZone></FilterZone>

          <Preview>
            {cars.length > 0 && <CarsList cars={cars} />}
            {!isLoading && cars.length === 0 && <NoResultText />}
            <RingLoader
              cssOverride={{ margin: "24px auto" }}
              color={theme.colors.background.spiner}
              loading={isLoading}
            />
            {!isLoading && cars.length >= 12 && <LoadMore />}
          </Preview>
        </div>
      </main>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.body}
        style={ModalStyles}
      >
        <ModalInfo></ModalInfo>
      </ReactModal>
    </>
  );
};

export default Catalog;
