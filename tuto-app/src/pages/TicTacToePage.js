import MyTicTacToe from "../components/MyTicTacToe";

function TicTacToePage() {
	return (
		<main style={{ textAlign: "center" }} className='TicTacToe'>
			<h1 className='title'>Tic-Tac-Toe</h1>
			<MyTicTacToe />
		</main>
	);
}

export default TicTacToePage;
