import { ReactNode } from "react";
import { SvgContainer } from "./FilledSvg.styled";

export interface FilledSvgProps {
  svg: ReactNode;
  size: Sizes;
}

function FilledSvg({svg, size}: FilledSvgProps) {
  return (
   <SvgContainer size={size}>{svg}</SvgContainer>
  )
}

export const sizes = {
  lg: '24px',
  xl: '28px',
  xxl: '32px'
}

export type Sizes = keyof typeof sizes;

export default FilledSvg;