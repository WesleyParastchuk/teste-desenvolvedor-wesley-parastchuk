import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import { GlobalStyle } from "./assets/styles/globalStyles.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</StrictMode>
);
