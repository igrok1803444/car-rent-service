import { Label } from "./InputLabel.styled";

export const InputLabel = ({ children, labelText }) => {
  return (
    <Label>
      {labelText}
      {children}
    </Label>
  );
};
