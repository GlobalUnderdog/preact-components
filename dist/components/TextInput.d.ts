import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
declare type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
interface Props {
    label?: string;
    type?: 'date' | 'email' | 'month' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url';
}
export declare const TextInput: React.FC<HTMLInputProps & Props>;
export {};
