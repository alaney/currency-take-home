import { mockResp } from "./mockCurrencyResponse";

describe("Selecting Currencies", () => {
  beforeEach(() => {
    cy.intercept("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json", mockResp);
    cy.intercept("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/one/twenty.json", {
      twenty: "1.2",
    });

    const username = "SomeName";
    cy.visit("/login");
    cy.get("input").first().type(username);
    cy.get("input").last().type("pwd");
    cy.get("button").click();
    cy.get("[data-cy=user-greeting]").should("have.text", `Hello, ${username}`);
  });

  it("should select and compare two currencies", () => {
    const listItem1 = cy.get("[data-cy=currency-list]").children().first();
    const listItem2 = cy.get("[data-cy=currency-list]").children().last();
    listItem1.click();
    listItem2.click();

    listItem1.should("have.css", "background-color", "rgb(0, 0, 255)");
    listItem2.should("have.css", "background-color", "rgb(0, 0, 255)");

    cy.get(".chakra-stat").first().should("contain.text", "ONE");
    cy.get(".chakra-stat").last().should("contain.text", "TWENTY");

    cy.get("button").contains("Compare").click();

    cy.get(".chakra-stat__number").last().should("have.text", "1.2");
  });
});
