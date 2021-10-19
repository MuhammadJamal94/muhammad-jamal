/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/// <reference types="Cypress">
export class SignupPage {
  navigate() {
    cy.visit('http://www.facebook.com');
  }

  fillFirstName(firstName) {
    cy.get('[name="firstname"]').type(firstName);
    return this;
  }

  fillLastName(lastName) {
    cy.get('[name="lastname"]').type(lastName);
    return this;
  }

  fillPassword(password) {
    cy.get('[id = password_step_input]').type(password);
    return this;
  }

  fillEmail(newEmail) {
    cy.get('[name = reg_email__]').type(newEmail);
    return this;
  }

  confirmEmail(confirmEmail) {
    cy.get('[name = reg_email_confirmation__]').type(confirmEmail);
    return this;
  }

  fillDate(day, month, year) {
    cy.get('[id="day"]').select(day);
    cy.get('[id="month"]').select(month);
    cy.get('[id="year"]').select(year);
    return this;
  }

  pressCreateNewAccount() {
    cy.get('[data-testid = "open-registration-form-button"]').click();
    return this;
  }

  selectGender(gender) {
    cy.get(`[name = sex][value = ${gender}]`).check();
    return this;
  }

  pressSubmit() {
    cy.get(['name = websubmit']).click();
    return this;
  }
}
