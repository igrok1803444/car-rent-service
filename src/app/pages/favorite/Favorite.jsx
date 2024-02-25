import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteList } from "../../../redux/favorite/selectors";
import { CarsList } from "../../components/cars-list/CarsList";
import { selectIsLoading } from "../../../redux/cars/selectors";
import { NoResultText } from "../../components/no-result- text/NoResultText";
import { Header } from "../../components/header/Header";
import ReactModal from "react-modal";
import { ModalStyles } from "app/components/modal/Modal.styled";
import { closeModal } from "redux/modal/modalSlice";
import { useEffect } from "react";
import { ModalInfo } from "app/components/modal/modal-info/ModalInfo";
import { selectModalIsOpen } from "redux/modal/selectors";

const Favorite = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const favoriteList = useSelector(selectFavoriteList);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleModalClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <Header />

      <main>
        <div className="container">
          {!isLoading && favoriteList.length === 0 && <NoResultText />}

          <CarsList cars={favoriteList} />
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

export default Favorite;
