import styled from "styled-components";

export const AddPostContainer = styled.section`
  background-color: var(--c-white);
  box-shadow: var(--shadow);
  border-radius: var(--b-radius-1);
  padding: 1.5rem;
  display: flex;
  gap: 1rem;

  form {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: flex-start;

    button {
      padding: 0.5rem;
      svg {
        font-size: 22px;
        color: var(--c-primary);
      }
    }
  }
`;
