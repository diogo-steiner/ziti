import styled from "styled-components";

export const CardProfileContainer = styled.section`
  background-color: var(--c-white);
  box-shadow: var(--shadow);
  border-radius: var(--b-radius-1);
  overflow: hidden;

  .cover__container {
    height: 4.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content__container {
    padding: 1.5rem;
  }

  .view-profile__container {
    margin-top: 1.5rem;
    padding: 1.5rem 0 0;
    border-top: 1px solid var(--c-gray-500);

    button {
      padding: 0.9375rem;
      border: 1px solid var(--c-primary);
      border-radius: var(--b-radius-1);
      width: 100%;
      font-size: var(--f-size-3);
      color: var(--c-primary);
      font-weight: var(--f-weight-3);
      transition: background-color 0.2s ease;

      &:hover {
        background-color: var(--c-primary-opacity);
      }
    }
  }
`;

export const AvatarNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -3.75rem;

  div {
    text-align: center;
    line-height: 1.6;
    margin-top: 0.8125rem;

    p {
      color: var(--c-gray-200);
      font-size: var(--f-size-3);
      font-weight: var(--f-weight-1);
    }
  }
`;
