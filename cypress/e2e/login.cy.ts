describe("Login", () => {
  it("should redirect to login", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Login");
  });

  it("should require username and password", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.get("h1").should("have.text", "Login");
  });

  it("should redirect to main page after login", () => {
    const username = "SomeName";
    cy.visit("/login");
    cy.get("input").first().type(username);
    cy.get("input").last().type("pwd");
    cy.get("button").click();
    cy.get("[data-cy=user-greeting]").should("have.text", `Hello, ${username}`);
  });

  it("should logout", () => {
    const username = "SomeName";
    cy.visit("/login");
    cy.get("input").first().type(username);
    cy.get("input").last().type("pwd");
    cy.get("button").click();
    cy.get("[data-cy=user-greeting]").should("have.text", `Hello, ${username}`);
    cy.get("[data-cy=logout]").click();
    cy.get("h1").should("have.text", "Login");
  });
});
