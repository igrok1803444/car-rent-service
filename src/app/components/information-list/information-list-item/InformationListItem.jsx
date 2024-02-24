import { InformationLI, InformationText } from "./InformationListItem.styled";

export const InformationListItem = ({ children }) => {
  return (
    <InformationLI>
      <InformationText>{children}</InformationText>
    </InformationLI>
  );
};
