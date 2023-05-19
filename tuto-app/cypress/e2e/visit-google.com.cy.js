describe("Visit the basic Google search page", () => {
	it("passes", () => {
		cy.visit("https://google.com/");
		cy.get(".V5OCtd").click();
		cy.get('[aria-label="‪Français (France)‬"]').scrollIntoView().click();
		cy.get("#W0wltc > .QS5gu")
			.scrollIntoView({ timeout: 5000 })
			.click({ timeout: 5000 });
		cy.get("#APjFqb").click({ timeout: 10000 });
		// cy.wait()
		cy.get("#APjFqb").type("Synerglass-Soft");
	});
});
