import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: block;

  padding: 14px;

  height: max-content;

  text-align: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.background.button};

  border: none;
  border-radius: 12px;

  color: ${({ theme }) => theme.colors.text.button};

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
`;
