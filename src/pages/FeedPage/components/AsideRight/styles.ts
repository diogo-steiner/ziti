import styled from "styled-components";

export const AsideRightContainer = styled.aside`
  background-color: var(--c-white);
  box-shadow: var(--shadow);
  border-radius: var(--b-radius-1);
  position: fixed;
  top: 15.3125rem;
  right: 0;

  a {
    display: block;
    width: 100%;
    color: var(--c-gray-200);
    padding: 1rem 1.5rem;
    text-decoration: none;

    svg {
      font-size: 1.5rem;
    }

    p {
      display: none;
      font-weight: var(--f-weight-1);
    }

    &:hover {
      background-color: var(--c-gray-700);
    }
  }

  @media screen and (min-width: 1024px) {
    position: sticky;
    top: calc(4.375rem + 2rem);

    a {
      display: flex;
      gap: 0.625rem;
      align-items: center;

      p {
        display: block;
      }

      &:nth-child(-n + 3) p {
        &::after {
          display: block;
          content: "Em breve";
          font-size: var(--f-size-1);
          font-weight: var(--f-weight-6);
          text-align: left;
        }
      }
    }
  }
`;
