import styled from "styled-components";

export const OptionProfileContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 1.4;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--c-gray-500);

  p {
    font-size: var(--f-size-3);
    font-weight: var(--f-weight-1);
    color: var(--c-gray-200);
  }
`;
