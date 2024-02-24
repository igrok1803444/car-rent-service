import styled from "styled-components";

export const ConditionsListStyled = styled.ul`
  display: flex;
  column-gap: 8px;
  row-gap: 8px;
  flex-wrap: wrap;

  max-width: 400px;

  margin-top: 8px;
`;

export const ConditionsLI = styled.li`
  padding: 7px 14px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;

  color: ${({ theme }) => theme.colors.text.conditionText};
  background-color: ${({ theme }) => theme.colors.background.conditionsLI};

  & span {
    font-weight: 600;
  }
`;
