import { Link } from "react-router-dom";

export default function MyNavBar() {
	// const styles = {
	// 	navBar: {
	// 		display: "flex",
	// 		flexDirection: "row",
	// 		gap: "10px",
	// 	},
	// };

	return (
		<nav
			className='navBar'
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "10px",
				justifyContent: "center",
			}}>
			<button className='home-btn'>
				<Link to='/'>Home</Link>
			</button>
			<button className='tictactoe-btn'>
				<Link to='/tictactoe'>Tic-Tac-Toe</Link>
			</button>
		</nav>
	);
}
