import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./uiSlice";
import viewReducer from "./viewSlice";
import newsReducer from "./newsSlice";

const store = configureStore({
	reducer: {
		ui: uiReducer,
		view: viewReducer,
		news: newsReducer,
	},
});

export default store;
