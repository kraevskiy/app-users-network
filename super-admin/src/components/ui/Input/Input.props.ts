import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	error?: boolean;
	appearance?: 'primary' | 'info' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
}
