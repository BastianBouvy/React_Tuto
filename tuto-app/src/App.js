import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./pages/layouts/BaseLayout";
import HomePage from "./pages/HomePage";
import TicTacToePage from "./pages/TicTacToePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<BaseLayout />}>
					<Route index element={<HomePage />} />
					<Route path='tictactoe' element={<TicTacToePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
