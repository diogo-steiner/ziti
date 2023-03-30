import { ImgHTMLAttributes } from "react";
import styled from "styled-components";
import avatar from "./../../../assets/avatar.svg";

type IAvatarStyledProps = ImgHTMLAttributes<HTMLImageElement> & {
  size?: "s" | "m" | "l" | "xl";
};

const handleReturnSize = (size = "s") => {
  if (size == "s") return "2.25rem";
  if (size == "m") return "2.5rem";
  if (size == "l") return "3.125rem";
  if (size == "xl") return "4.375rem";
};

export const AvatarStyled = styled.img.attrs(
  ({ size, src }: IAvatarStyledProps) => ({
    size: size,
    src: src?.trim() || avatar,
  })
)`
  width: ${({ size }) => handleReturnSize(size)};
  height: ${({ size }) => handleReturnSize(size)};
  background-color: var(--c-white);
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;
