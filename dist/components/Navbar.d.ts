import { InterpolationWithTheme } from '@emotion/core';
import { ReactElement } from 'react';
import { ColorType } from '../style';
interface NavLinkProps {
    href: string;
    label: string;
    button?: boolean;
    color?: ColorType;
    setExpanded: (_: boolean) => void;
}
interface Props {
    links: NavLinkProps[];
    logo: ReactElement;
    navCSS: InterpolationWithTheme<any>;
}
export declare const Navbar: React.FC<Props>;
export {};
