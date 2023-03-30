import styled, { css } from "styled-components";

interface IInputContainerProps {
  isInputFocus: boolean;
  hasValueInput: boolean;
}

export const InputContainer = styled.div<IInputContainerProps>`
  position: relative;
  margin-bottom: 1rem;

  input {
    font-size: 1rem;
    color: var(--c-gray-100);
    width: 100%;
    padding: 1rem;
    border: 0.125rem solid var(--c-gray-600);
    border-radius: var(--b-radius-1);
    box-sizing: border-box;
    background-color: transparent;

    &:focus {
      border-color: var(--c-primary);
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1.875rem white inset;
      box-shadow: 0 0 0 1.875rem white inset;
    }
  }

  label {
    top: 1.25rem;
    left: 1rem;
    font-size: var(--f-size-3);
    color: var(--c-gray-300);
    position: absolute;
    transition: 0.3s ease;

    ${({ isInputFocus, hasValueInput }) => {
      if (isInputFocus || hasValueInput) {
        return css`
          font-size: var(--f-size-2);
          top: -0.3125rem;
          color: var(--c-primary);
          background-color: var(--c-white);
          padding: 0 0.625rem;

          ${() => {
            if (!isInputFocus) {
              return css`
                color: var(--c-gray-400);
              `;
            }
          }}
        `;
      }
    }}
  }

  .icon-eye__input {
    font-size: 1.125rem;
    position: absolute;
    top: 0.8125rem;
    right: 1rem;
    padding: 0.375rem;
    cursor: pointer;
  }
`;

export const InputMessageError = styled.span`
  display: block;
  font-size: var(--f-size-2);
  color: var(--c-negative);
  margin-top: 0.375rem;
`;
