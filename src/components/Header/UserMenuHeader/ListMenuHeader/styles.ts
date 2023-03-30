import styled from "styled-components";

export const ListMenuHeaderContainer = styled.nav`
  background-color: var(--c-white);
  box-shadow: var(--shadow);
  border-radius: 0 0 var(--b-radius-1) var(--b-radius-1);
  min-width: 12.5rem;
  position: absolute;
  top: 3.375rem;
  right: 0;
  z-index: 12;

  ul li {
    padding: 0.875rem 1.5rem;
    cursor: pointer;

    &:hover {
      background-color: var(--c-gray-700);
    }

    svg {
      font-size: 1.25rem;
    }

    button,
    a {
      color: var(--c-gray-100);
      text-decoration: none;
      display: flex;
      gap: 0.5rem;
      width: 100%;
    }

    p {
      font-weight: var(--f-weight-1);
    }
  }
`;
