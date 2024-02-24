import { InformationListStyled } from "./InformationList.styled";
import { InformationListItem } from "./information-list-item/InformationListItem";

export const InformationList = ({ dataArray, styles }) => {
  return (
    <InformationListStyled style={styles}>
      {dataArray
        .filter((item) => {
          return item;
        })
        .map((item, index) => {
          return <InformationListItem key={index}>{item}</InformationListItem>;
        })}
    </InformationListStyled>
  );
};
