import { IAppState } from './app.state.ts';
import { PayloadAction } from '@reduxjs/toolkit';

export const reducerHandleAuth = (state: IAppState, action: PayloadAction<boolean | undefined>) => {
	return {
		...state,
		isLoggedIn: action.payload || !state.isLoggedIn
	}
}

export const reducerHandleDrawer = (state: IAppState, action: PayloadAction<boolean | undefined>) => {
	return {
		...state,
		isDrawerOpen: action.payload || !state.isDrawerOpen
	}
}

export const reducerHandleTheme = (state: IAppState, action: PayloadAction<'light' | 'dark'>) => {
	document.documentElement.setAttribute('data-theme', action.payload);
	localStorage.setItem('theme', action.payload)
	return {
		...state,
		theme: action.payload
	}
}
