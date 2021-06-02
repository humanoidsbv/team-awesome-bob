describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("http://localhost:3000");
    cy.get("Header").find("button").should("exist").click();
    cy.get(`[data-cy=MenuNavigation]`).contains("Team Members").should("exist").click();
    cy.url().should("equal", "http://localhost:3000/team-members");
  });
});
