import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
// /import "./index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MemoryRouter>
			<App />
		</MemoryRouter>
	</React.StrictMode>
);
