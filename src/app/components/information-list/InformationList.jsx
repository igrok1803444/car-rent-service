import { InformationListItem } from "./information-list-item/InformationListItem";

export const InformationList = ({ dataArray }) => {
  return (
    <ul>
      {dataArray
        .filter((item) => {
          return item;
        })
        .map((item, index) => {
          return <InformationListItem key={index}>{item}</InformationListItem>;
        })}
    </ul>
  );
};
