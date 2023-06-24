import { Route, Routes } from "react-router-dom";
import { NewWelcome } from "./components/NewWelcome";
import { Welcome } from "./components/Welcome";
import { WelcomeList } from "./components/WelcomeList";
import { WelcomeLayout } from "./WelcomeLayout";

export function WelcomePageRoutes() {
	return (
		<>
			<Routes>
				<Route element={<WelcomeLayout />}>
					<Route index element={<WelcomeList />} />
					<Route path=":id" element={<Welcome />} />
					<Route path="new" element={<NewWelcome />} />
				</Route>
			</Routes>
		</>
	);
}
