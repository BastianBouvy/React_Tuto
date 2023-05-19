import MyButton from "../components/MyButton.js";
import MyList from "../components/MyList";
import { useState } from "react";

function HomePage() {
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}

	return (
		<main style={{ textAlign: "center" }}>
			<h1>My App</h1>
			<p>{count}</p>
			<MyButton onClick={handleClick} />
			<MyButton onClick={handleClick} />
			<MyList />
		</main>
	);
}

export default HomePage;
