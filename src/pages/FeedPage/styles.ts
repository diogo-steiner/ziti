import styled from "styled-components";

export const FeedPageContainer = styled.div`
  margin: 1.25rem auto;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  grid-template-columns: minmax(15.625rem, 1fr);

  @media screen and (min-width: 720px) {
    grid-template-columns: minmax(12.5rem, 18.5rem) minmax(25rem, 39.8125rem);
    gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(12.5rem, 18.5rem) minmax(25rem, 46.875rem) minmax(
        8.125rem,
        11.375rem
      );
    margin-top: 2rem;
    gap: 2rem;
  }
`;
