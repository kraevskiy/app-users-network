
export type TAppThemeState = 'dark' | 'light';

export interface IAppState {
	isLoggedIn: boolean;
	isDrawerOpen: boolean;
	theme: TAppThemeState
}

export const initialAppState: IAppState = {
	isLoggedIn: false,
	isDrawerOpen: true,
	theme: localStorage.getItem('theme') as TAppThemeState || 'dark',
};
