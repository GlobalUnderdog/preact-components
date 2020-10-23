/// <reference types="react" />
import Reveal from 'react-awesome-reveal';
declare type Direction = 'up' | 'down' | 'left' | 'right';
export interface SlideFadeProps extends React.ComponentProps<typeof Reveal> {
    direction?: Direction;
    /** Defaults to 100% */
    distance?: string;
}
export declare const SlideFade: React.FC<SlideFadeProps>;
export {};
