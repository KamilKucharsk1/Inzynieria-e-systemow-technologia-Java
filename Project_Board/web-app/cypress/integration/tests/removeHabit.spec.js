/// <reference types="Cypress" />

const time = 600;

context("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });

  it("Add habit", () => {
    cy.get("a[cy=header-habits").click();
    cy.wait(time);
    cy.get("button[cy=delete-habit-0]").click();
    cy.wait(time);
    cy.get("button[cy=delete-habit-1]").click();
    cy.wait(time);
    cy.get("button[cy=delete-habit-2]").click();
    cy.wait(time);
  });
});
