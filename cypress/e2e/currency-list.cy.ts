import { mockResp } from "./mockCurrencyResponse";

describe("Currency List", () => {
  beforeEach(() => {
    cy.intercept("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json", mockResp);

    const username = "SomeName";
    cy.visit("/login");
    cy.get("input").first().type(username);
    cy.get("input").last().type("pwd");
    cy.get("button").click();
    cy.get("[data-cy=user-greeting]").should("have.text", `Hello, ${username}`);
  });

  it("should display currencies", () => {
    cy.get("[data-cy=currency-list]").children().should("have.length", 20);
    cy.get("[data-cy=currency-list]").children().last().should("have.text", "twenty");
  });

  it("should show the correct number of pages", () => {
    cy.get("[data-cy=pager]").should("contain.text", "Page 1 of 2");
  });

  it("should disable the prev page button when on page 1", () => {
    cy.get("[data-cy=pager] button").first().should("be.disabled");
  });

  it("should display the second page of data", () => {
    cy.get("[data-cy=pager] button").last().click();
    cy.get("[data-cy=currency-list]").children().should("have.length", 2);
    cy.get("[data-cy=currency-list]").children().last().should("have.text", "twenty-two");
    cy.get("[data-cy=pager]").should("contain.text", "Page 2 of 2");
  });

  it("should disable the next page button when on the last page", () => {
    cy.get("[data-cy=pager] button").last().should("be.disabled");
  });
});
