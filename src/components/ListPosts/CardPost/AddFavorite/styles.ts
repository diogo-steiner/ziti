import styled, { css } from "styled-components";

interface IAddFavoriteContainerProps {
  isFavoritedPost: boolean;
}

export const AddFavoriteContainer = styled.div<IAddFavoriteContainerProps>`
  svg {
    font-size: 1.125rem;
    ${({ isFavoritedPost }) => {
      if (isFavoritedPost) {
        return css`
          color: var(--c-primary);
        `;
      }
    }}
  }
`;
