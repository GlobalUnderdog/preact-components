import { FC, ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { ColorType } from '../style';
interface Props {
    /** If no color is set, defaults to use base.light as background */
    color?: ColorType;
    analyticsTrack?: {
        /** Will default to 'Button Click' */
        category?: string;
        action: string;
        label?: string;
    };
}
declare type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const Button: FC<Props & HTMLButtonProps>;
export {};
