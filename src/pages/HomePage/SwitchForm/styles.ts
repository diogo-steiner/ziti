import styled from "styled-components";

export const SwitchFormContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 4.375rem;
  }
`;

export const SwitchContainer = styled.section`
  margin-bottom: 2.625rem;

  button {
    font-size: var(--f-size-4);
    font-weight: var(--f-weight-1);
  }

  button::after {
    display: block;
    content: "";
    width: 0;
    height: 0.125rem;
    margin-top: 0.125rem;
    transition: width 0.2s ease;
  }

  .switch__button--active::after {
    width: 100%;
    background-color: var(--c-primary);
  }

  span {
    font-size: var(--f-size-3);
    margin: 0 0.375rem;
    background-color: var(--c-white);
    box-shadow: var(--shadow);
    padding: 0.1875rem;
    border-radius: 50%;
  }
`;
