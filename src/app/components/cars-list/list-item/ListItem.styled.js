import { IoMdHeart } from "react-icons/io";
import styled from "styled-components";

export const LI = styled.li`
  position: relative;
  width: 274px;
`;

export const IconButton = styled.button`
  cursor: pointer;

  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  margin: 0;

  background-color: inherit;
  border: none;

  color: ${({ theme }) => theme.colors.icons.favoriteInactive};

  &.favorite {
    color: ${({ theme }) => theme.colors.icons.favoriteActive};
  }
`;
export const Icon = styled(IoMdHeart)`
  pointer-events: none;

  fill: none;

  stroke: ${({ theme }) => theme.colors.icons.favoriteInactive};
  stroke-width: 30;
  stroke-miterlimit: 4;
  stroke-opacity: 1;
  stroke-linecap: round;
  stroke-linejoin: round;

  width: 18px;
  height: 18px;
  transition-property: fill, stroke;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &.favorite {
    fill: ${({ theme }) => theme.colors.icons.favoriteActive};
    stroke: ${({ theme }) => theme.colors.icons.favoriteActive};
  }
`;

export const CarData = styled.div`
  padding-top: 14px;
  width: 100%;
`;

export const CarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-right: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.text.carName};
`;
export const CarName = styled.p`
  overflow: hidden;
  white-space: nowrap;

  text-overflow: ellipsis;
`;
