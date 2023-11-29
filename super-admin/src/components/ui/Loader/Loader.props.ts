import { DetailedHTMLProps, HTMLAttributes } from 'react';

type TAppearance = 'primary'
	| 'secondary'
	| 'accent'
	| 'neutral'
	| 'info'
	| 'success'
	| 'warning'
	| 'error';

type TSize = 'xs'
	| 'sm'
	| 'md'
	| 'lg';

export interface LoaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	appearance?: TAppearance;
	size?: TSize;
}
