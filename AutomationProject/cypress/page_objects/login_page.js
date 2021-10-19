/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/// <reference types="Cypress">
export class LoginPage {
  navigate() {
    cy.visit('http://www.facebook.com');
  }

  writeEmail(email) {
    cy.get('[id = email]').type(email);
    return this;
  }

  fillPassword(password) {
    cy.get('[id = pass]').type(password);
    return this;
  }

  pressLogin() {
    cy.get('[data-testid = royal_login_button]').click();
    return this;
  }
}
