import styled from "styled-components";

export const LoadMoreButton = styled.button`
  cursor: pointer;

  display: block;

  margin: 0 auto;
  margin-top: 100px;

  background-color: inherit;

  border: none;

  color: ${({ theme }) => theme.colors.text.loadMore};

  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  transition-property: background-color;
  transition-duration: ${({ theme }) => theme.transition.duration};
  transition-timing-function: ${({ theme }) => theme.transition.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.text.loadMoreHover};
  }
`;
