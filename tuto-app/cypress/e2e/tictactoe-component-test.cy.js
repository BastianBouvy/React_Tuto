import MyTicTacToe from "../../src/components/MyTicTacToe";
import TicTacToePage from "../../src/pages/TicTacToePage";

describe("Test scenario", () => {
	it("open my app", () => {
		cy.mount(<MyTicTacToe />);
	});
});
