import styled from "styled-components";

export const MenuPostContainer = styled.div`
  position: relative;

  & > button {
    font-size: 1.125rem;
  }
`;

export const OptionsMenuPost = styled.div`
  background-color: var(--c-white);
  border-radius: var(--b-radius-1);
  box-shadow: var(--shadow);
  position: absolute;
  top: 1rem;
  right: 0;
  z-index: 10;

  button {
    cursor: pointer;
    padding: 1rem 0.5rem;
    font-size: 0.875rem;

    &:hover {
      background-color: var(--c-gray-700);
    }
  }
`;
