import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentCountry = (countryCode) => {
	return { type: "news/setCurrentCountry", payload: countryCode };
};

console.log(process.env.NEXT_PUBLIC_API_KEY);

export const fetchNews = createAsyncThunk(
	"news/fetchNews",
	async (countryCode) => {
		const response = await fetch(
			`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=` +
				process.env.NEXT_PUBLIC_API_KEY
		);
		const data = await response.json();
		if (data.status === "ok") {
			return data.articles;
		} else {
			throw new Error("Something went wrong");
		}
	}
);

const getInitialCountry = () => {
	if (typeof window !== "undefined") {
		return localStorage.getItem("currentCountry") || "pl";
	}
	return "pl";
};

const newsSlice = createSlice({
	name: "news",
	initialState: {
		articles: [],
		status: "idle",
		error: null,
		currentCountry: getInitialCountry(),
	},
	reducers: {
		setCurrentCountry: (state, action) => {
			state.currentCountry = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.articles = action.payload;
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default newsSlice.reducer;
