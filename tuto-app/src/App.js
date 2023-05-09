import "./App.css";
import MyButton from "./components/MyButton.js";
import MyList from "./components/MyList";
import MyNavBar from "./components/MyNavBar";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div className='App'>
			<MyNavBar />
			<h1>My App</h1>
			<p>{count}</p>
			<MyButton onClick={handleClick} />
			<MyButton onClick={handleClick} />
			<MyList />
		</div>
	);
}

export default App;
