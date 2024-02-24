import styled from "styled-components";

export const Label = styled.label`
  display: block;

  max-width: min-content;

  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: ${({ theme }) => theme.colors.text.inputLabel};
`;
