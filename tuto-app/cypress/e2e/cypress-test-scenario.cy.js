describe("Test scenario", () => {
	it("open my app", () => {
		cy.visit("http://localhost:3000/");
	});

	it("Go on the 'tictactoe' page", () => {
		// Set Up the app
		cy.visit("http://localhost:3000/");

		// Write Action to Make the Test
		cy.get("nav.navBar").get("button.tictactoe-btn").click();

		// Make Assertion about the Result
		cy.get("h1.title").contains("Tic-Tac-Toe");
		// cy.contains("Tic-Tac-Toe");
		// cy.title().should("include", "Tic-Tac-Toe");
	});
});
