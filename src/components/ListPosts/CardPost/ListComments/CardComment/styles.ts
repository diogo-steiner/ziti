import styled from "styled-components";

export const CardCommentContainer = styled.li`
  display: flex;
  gap: 0.4375rem;

  article {
    padding: 0.6875rem 1rem;
    background-color: var(--c-gray-700);
    border-radius: var(--b-radius-1);
    max-width: calc(100% - 43px);

    .owner-options__container {
      display: flex;
      gap: 1.125rem;
      align-items: center;
      justify-content: space-between;
    }

    p {
      margin-top: 0.25rem;
      line-height: 1.6;
      overflow-wrap: break-word;
      max-width: 100%;
    }
  }
`;
