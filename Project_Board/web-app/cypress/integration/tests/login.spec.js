/// <reference types="Cypress" />

const time = 600;

context("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Login to account", () => {
    cy.get("div[cy=login] > input").type("dominikslawkowski");
    cy.wait(time);
    cy.get("div[cy=password] > input").type("password");
    cy.wait(time);
    cy.get("button[cy=submit]").click();
  });
});
