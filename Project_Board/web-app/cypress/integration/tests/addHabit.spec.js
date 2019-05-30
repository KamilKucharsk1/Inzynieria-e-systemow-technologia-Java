/// <reference types="Cypress" />

const time = 600;

context("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/home");
  });

  it("Add habit", () => {
    cy.get("a[cy=header-habits").click();
    cy.wait(time);
    cy.get("div[cy=form-name] > input").type("My new awesome habit");
    cy.wait(time);
    cy.get("textarea[cy=form-description]").type(
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    );
    cy.wait(time);
    cy.get("div[cy=form-monday]").click();
    cy.wait(time / 2);
    cy.get("div[cy=form-wednesday]").click();
    cy.wait(time / 2);
    cy.get("div[cy=form-saturday]").click();
    cy.wait(time / 2);
    cy.get("button[cy=submit]").click();
  });
});
