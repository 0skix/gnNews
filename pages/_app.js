import store from "@/store";
import "@/styles/globals.css";
import "@/pages/config/i18n.js";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />{" "}
		</Provider>
	);
}
