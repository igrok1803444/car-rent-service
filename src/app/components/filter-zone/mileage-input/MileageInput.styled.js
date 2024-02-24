import InputNumber from "rc-input-number";
import styled from "styled-components";

export const InputWrapper = styled.div`
  /* overflow: hidden; */

  display: flex;
  gap: 0;
  align-items: baseline;

  width: calc((100% - 1px) / 2);

  background-color: ${({ theme }) => theme.colors.background.select};
`;

export const Prefix = styled.p`
  padding: 14px 24px;
  padding-right: 0;

  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.text.select};
`;

export const StyledInput = styled(InputNumber)`
  display: block;

  padding: 14px 8px;

  width: 100%;

  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: ${({ theme }) => theme.colors.text.select};
`;
