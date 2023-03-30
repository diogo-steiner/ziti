import styled from "styled-components";

export const MenuCommentContainer = styled.div`
  position: relative;

  button {
    padding: 0.375rem;
    line-height: 0;

    svg {
      font-size: 1.375rem;
    }
  }
`;

export const OptionsMenuComment = styled.div`
  background-color: var(--c-white);
  border-radius: var(--b-radius-1);
  box-shadow: var(--shadow);
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 10;

  button {
    cursor: pointer;
    padding: 1rem;
    font-size: 0.875rem;

    &:hover {
      background-color: var(--c-gray-700);
    }
  }
`;
