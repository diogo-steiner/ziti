import styled, { css } from "styled-components";

interface IButtonFollowProps {
  isFollowing: boolean;
}

export const CardPeopleContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PeopleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  div {
    line-height: 1.4;

    p {
      font-size: var(--f-size-3);
      color: var(--c-gray-200);
      font-weight: var(--f-weight-1);
    }
  }
`;

export const ButtonFollow = styled.button<IButtonFollowProps>`
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  font-weight: var(--f-weight-1);

  ${({ isFollowing }) => {
    if (!isFollowing) {
      return css`
        color: var(--c-primary);
        background-color: var(--c-primary-opacity);
      `;
    }

    return css`
      color: var(--c-primary);
      background-color: var(--c-white);

      .check-following__icon {
        font-size: 1.375rem;
      }
    `;
  }}
`;
