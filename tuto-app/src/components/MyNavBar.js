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
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "10px",
				justifyContent: "center",
			}}>
			{/* <div style={{}}> */}
			<button>Home</button>
			<button>Tic-Tac-Toe</button>
			{/* </div> */}
		</nav>
	);
}
