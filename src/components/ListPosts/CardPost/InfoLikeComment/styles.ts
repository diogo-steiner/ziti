import styled, { css } from "styled-components";

interface IInformLikeCommentContainerPorps {
  isPostLiked: boolean;
}

export const InfoLikeCommentContainer = styled.section<IInformLikeCommentContainerPorps>`
  padding: 0.5rem 0.375rem;
  border-top: 1px solid var(--c-gray-500);
  border-bottom: 1px solid var(--c-gray-500);
  margin-bottom: 1.125rem;
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    ${({ isPostLiked }) => {
      if (isPostLiked) {
        return css`
          &:first-child {
            svg {
              color: var(--c-primary);
            }
          }
        `;
      }
    }}

    svg {
      font-size: var(--f-size-4);
      padding: 0.25rem;
      cursor: pointer;
    }

    span {
      font-size: var(--f-size-3);
    }
  }
`;
