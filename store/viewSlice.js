import { createSlice } from "@reduxjs/toolkit";

const getInitialView = () => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("view") || "list";
	}
	return "list";
};

const getInitialLang = () => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("lang") || "pl";
	}
	return "pl";
};

const viewSlice = createSlice({
	name: "view",
	initialState: {
		view: getInitialView(),
		lang: getInitialLang(),
	},
	reducers: {
		changeView(state, action) {
			state.view = action.payload;
		},
		changeLang: (state, action) => {
			state.lang = action.payload;
		},
	},
});

export const viewActions = viewSlice.actions;

export default viewSlice.reducer;
