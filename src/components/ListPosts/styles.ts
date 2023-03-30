import styled from "styled-components";

export const ListPostsContaier = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (min-width: 1024px) {
    gap: 2rem;
    margin-top: 2rem;
  }
`;
