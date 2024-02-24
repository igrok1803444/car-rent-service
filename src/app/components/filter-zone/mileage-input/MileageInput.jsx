import { InputWrapper, Prefix, StyledInput } from "./MileageInput.styled";

export const CarMileage = ({ name, prefix, setMileage }) => {
  return (
    <InputWrapper>
      <Prefix>{prefix} </Prefix>
      <StyledInput
        type="text"
        name={name}
        formatter={(value) => {
          return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }}
        onChange={(value) => {
          setMileage(value);
        }}
      />
    </InputWrapper>
  );
};
