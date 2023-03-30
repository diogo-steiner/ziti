import styled from "styled-components";
import logoMobile from "./../../assets/logo-mobile.svg";
import logoDesktop from "./../../assets/logo-desktop.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.375rem;
  background-color: var(--c-white);
  box-shadow: var(--shadow);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`;

export const LogoContainer = styled.h2`
  height: 3.125rem;
  width: 3.125rem;
  background-image: url(${logoMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media screen and (min-width: 768px) {
    background-image: url(${logoDesktop});
  }
`;
