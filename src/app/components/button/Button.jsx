import { ButtonStyled } from "./Button.styled";

export const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
