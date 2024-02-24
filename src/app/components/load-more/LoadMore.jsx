import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../../redux/cars/operations";
import { selectPage } from "../../../redux/cars/selectors";
import { selectFilter } from "../../../redux/filter/selectors";
import { LoadMoreButton } from "./loadMore.styled";

export const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { make } = useSelector(selectFilter);

  return (
    <LoadMoreButton
      type="button"
      onClick={() => {
        dispatch(loadMore({ page, make }));
      }}
    >
      Load More
    </LoadMoreButton>
  );
};
