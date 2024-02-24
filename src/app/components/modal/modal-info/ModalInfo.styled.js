import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const ModalInfoWrapper = styled.div`
  position: relative;
  padding: 40px;
`;

export const ModalCloseIcon = styled(IoMdClose)`
  cursor: pointer;

  position: absolute;
  top: 16px;
  right: 8px;

  width: 24px;
  height: 24px;
`;

export const ModalCarInfoWrapper = styled.div`
  margin-top: 14px;
`;

export const ModalCarName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: ${({ theme }) => theme.colors.text.carName};
`;

export const ModalCarDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: ${({ theme }) => theme.colors.text.carDesc};
`;

export const ModalSubTitle = styled.p`
  margin-top: 24px;

  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  color: ${({ theme }) => theme.colors.text.carDesc};
`;

export const ModalLink = styled.a`
  display: block;

  padding: 12px 50px;

  margin-top: 24px;

  width: max-content;

  background-color: ${({ theme }) => theme.colors.background.button};

  border: none;
  border-radius: 12px;

  color: ${({ theme }) => theme.colors.text.button};

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
`;
