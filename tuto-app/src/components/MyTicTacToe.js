import { useState } from "react";

export default function MyTicTacToe() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const currentSquares = history[currentMove];
	const currentSymbol = currentMove % 2 === 0 ? "X" : "O";

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	const moves = history.map((turn, nb) => {
		let desc;
		if (nb > 0) {
			desc = "Go to move #" + nb;
		} else {
			desc = "Go to game start";
		}

		return (
			<li key={nb}>
				<button onClick={() => jumpTo(nb)}>{desc}</button>
			</li>
		);
	});

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}>
			<Board
				currentSymbol={currentSymbol}
				squares={currentSquares}
				onPlay={handlePlay}
			/>
			<div>
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

// WIP
function Board({ currentSymbol, squares, onPlay }) {
	// const [squares, setSquares] = useState(Array(9).fill(null));

	function handleClickOnSquare(squareIndex) {
		if (squares[squareIndex] || calculateWinner(squares)) return;

		const newSquares = squares.slice();
		newSquares[squareIndex] = currentSymbol;
		onPlay(newSquares);
	}

	const winner = calculateWinner(squares);
	let status = winner ? "Winner: " + winner : "Next player: " + currentSymbol;

	const content = squares.map((number, i) => (
		<Square
			key={i.toString()}
			value={squares[i]}
			onSquareClick={() => handleClickOnSquare(i)}
		/>
	));

	return (
		<>
			<div className='status'>{status}</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					alignContent: "center",
					justifyContent: "center",
					width: 300,
					alignSelf: "center",
				}}>
				{content}
			</div>
		</>
	);
}

function Square({ value, onSquareClick }) {
	return (
		<button
			className='square'
			style={{
				flexBasis: "33.333%",
				width: "34px",
				height: "34px",
				border: "1px solid #999",
				lineHeight: "34px",
			}}
			onClick={onSquareClick}>
			{value}
		</button>
	);
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

// Possible improvements :
// For the current move only, show “You are at move #…” instead of a button.
// Rewrite Board to use two loops to make the squares instead of hardcoding them.
// Add a toggle button that lets you sort the moves in either ascending or descending order.
// When someone wins, highlight the three squares that caused the win (and when no one wins, display a message about the result being a draw).
// Display the location for each move in the format (row, col) in the move history list.
