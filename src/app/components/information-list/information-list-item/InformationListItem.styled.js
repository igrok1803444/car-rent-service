import styled from "styled-components";

export const InformationLI = styled.li`
  width: max-content;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: -8px;

    height: 16px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);

    transform: translateY(-50%);
  }
`;

export const InformationText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.informationList};
`;
