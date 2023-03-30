import styled from "styled-components";

export const TextareaContainer = styled.textarea`
  font-size: var(--f-size-4);
  line-height: 1.6;
  width: 100%;
  max-height: 15.625rem;
  outline: none;
  resize: none;
  padding: 0.6875rem 1rem 0;
  background-color: var(--c-gray-700);
  border: 2px solid transparent;
  border-radius: var(--b-radius-1);
  box-sizing: border-box;

  &:focus {
    border-color: var(--c-secondary);
  }

  &::placeholder {
    font-size: var(--f-size-3);
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--c-secondary);
    border-radius: var(--b-radius-1);
  }
`;
