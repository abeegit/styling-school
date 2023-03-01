import styled from 'styled-components';
import { Sizes, sizes } from './FilledSvg';

interface SvgContainerProps {
  size: Sizes
}

export const SvgContainer = styled.div(({ size }: SvgContainerProps) => ({
  width: sizes[size],
  height: sizes[size]
}));