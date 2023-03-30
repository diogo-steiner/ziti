import styled from "styled-components";

export const AddCommentContainer = styled.section`
  display: flex;
  gap: 0.4375rem;

  form {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;

    button {
      padding: 0.5rem;

      svg {
        font-size: 1.375rem;
        color: var(--c-primary);
      }
    }
  }
`;
