import FilledSvg from './FilledSvg/FilledSvg';
import { Icons, icons } from './icons-svgs';

export interface IconProps {
  name: Icons;
}


export function Icon({ name }: IconProps) {
  return <FilledSvg svg={icons[name]} size="xxl" />;
}

export default Icon;
