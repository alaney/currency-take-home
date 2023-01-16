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

  it("should filter the list of currencies", () => {
    cy.get("input").type("twenty");
    cy.get("[data-cy=currency-list]").children().should("have.length", 3);
    cy.get("[data-cy=currency-list]").children().last().should("have.text", "twenty-two");
  });
});
