import { createSlice } from '@reduxjs/toolkit';
import { initialAppState } from './app.state';
import { reducerHandleAuth, reducerHandleDrawer, reducerHandleTheme } from './app.reducer.ts';

export const appSlice = createSlice({
	name: 'app',
	initialState: initialAppState,
	reducers: {
		handleAuth: reducerHandleAuth,
		handleDrawer: reducerHandleDrawer,
		handleTheme: reducerHandleTheme,
	},
});

export const appReducer = appSlice.reducer;

export const {handleAuth, handleDrawer, handleTheme} = appSlice.actions;

