import styled from "styled-components";

export const NoResultTextStyled = styled.h2`
  margin: 0 auto;

  max-width: 700px;
  width: max-content;

  font-size: 24px;

  color: ${({ theme }) => theme.colors.text.noResultText};
`;
