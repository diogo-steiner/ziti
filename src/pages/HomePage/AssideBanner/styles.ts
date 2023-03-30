import styled from "styled-components";

export const AsideBannerContainer = styled.aside`
  display: none;
  position: relative;

  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    max-width: 27.625rem;
    height: calc(100vh - 4.375rem);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const AsideBannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--c-primary-opacity);
  position: absolute;
  top: 0;
  left: 0;
`;
