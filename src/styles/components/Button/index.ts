import styled, { css } from "styled-components";

interface IButtonStyledProps {
  size?: "primaryBig" | "primaryMedium";
  isLoading?: boolean;
}

const optionsButtons = {
  primaryBig: css`
    width: 100%;
    padding: 0.9375rem;
  `,

  primaryMedium: css`
    padding: 0.4375rem 1.5rem;
  `,
};

export const ButtonStyled = styled.button<IButtonStyledProps>`
  color: var(--c-white);
  font-weight: var(--f-weight-1);
  border-radius: var(--b-radius-1);
  background-color: var(--c-primary);
  font-size: var(--f-size-4);
  transition: background-color 0.2s ease;
  margin-top: 0.5rem;

  ${({ size = "primaryBig" }) => {
    return css`
      ${optionsButtons[size]}
    `;
  }}

  ${({ isLoading }) => {
    if (isLoading) {
      return css`
        opacity: 75%;
        cursor: default;
      `;
    }
  }}

  &:hover {
    background-color: var(--c-primary-hover);
  }
`;
