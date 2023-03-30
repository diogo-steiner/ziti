import styled from "styled-components";

export const AsideLeftContainer = styled.aside`
  display: none;

  @media screen and (min-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: sticky;
    top: calc(4.375rem + 2rem);
  }

  @media screen and (min-width: 1024px) {
    gap: 2rem;
  }
`;
