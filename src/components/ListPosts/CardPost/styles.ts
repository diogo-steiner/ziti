import styled from "styled-components";

export const CardPostContainer = styled.li`
  padding: 1.5rem;
  background-color: var(--c-white);
  border-radius: var(--b-radius-1);
  box-shadow: var(--shadow);
`;

export const HeaderPostContainer = styled.header`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;

  .post-options__container {
    display: flex;
    gap: 1rem;
  }
`;

export const HeaderPostAuthorTimestampContainer = styled.div`
  display: flex;
  gap: 1rem;

  .autor-timestamp__container {
    div {
      display: flex;
      align-items: center;

      strong {
        font-size: var(--f-size-4);
      }

      p {
        font-size: var(--f-size-3);
        display: flex;
        align-items: center;

        &::before {
          content: "\u2022";
          padding: 0.1875rem;
          font-size: 1.25rem;
        }
      }
    }
  }

  time {
    font-size: var(--f-size-2);
    color: var(--c-gray-300);
  }
`;

export const ContentPostContainer = styled.main`
  margin: 1.125rem 0;
  line-height: 1.6;
  overflow-wrap: break-word;
`;
