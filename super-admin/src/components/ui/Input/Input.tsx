import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props.ts';
import cn from 'classnames';

const Input = forwardRef( ({error, appearance = 'primary', className, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
	return <input className={cn('input input-bordered w-full', className, {
		'input-error': error,
		'input-primary': appearance === 'primary',
		'input-info': appearance === 'info',
		'input-secondary': appearance === 'secondary',
		'input-accent': appearance === 'accent',
		'input-success': appearance === 'success',
		'input-warning': appearance === 'warning',
	})} {...props} ref={ref} />;
});

export default Input;
