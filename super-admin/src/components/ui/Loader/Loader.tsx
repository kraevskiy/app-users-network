import { FC } from 'react';
import { LoaderProps } from './Loader.props.ts';
import cn from 'classnames';

const React: FC<LoaderProps> = ({className, appearance = 'primary', size = 'sm', ...props}) => {

	return <span className={cn('loading loading-spinner', className, {
		'loading-sm': size === 'sm',
		'loading-md': size === 'md',
		'loading-lg': size === 'lg',
		'text-primary': appearance === 'primary',
		'text-secondary': appearance === 'secondary',
		'text-accent': appearance === 'accent',
		'text-neutral': appearance === 'neutral',
		'text-info': appearance === 'info',
		'text-success': appearance === 'success',
		'text-warning': appearance === 'warning',
		'text-error': appearance === 'error',
	})} {...props} />;
};

export default React;
