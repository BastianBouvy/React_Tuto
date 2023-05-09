import { useState } from "react";

export default function MyButton({ onClick }) {
	let btnText = "I'm a buttonnn";
	const [txtIsVisible, setTxtVisibility] = useState(true);

	function handleClick() {
		setTxtVisibility(!txtIsVisible);
		onClick();
	}

	return (
		<div>
			<button onClick={handleClick}>{btnText + " oui"}</button>
			{txtIsVisible && <p>oui</p>}
		</div>
	);
}
