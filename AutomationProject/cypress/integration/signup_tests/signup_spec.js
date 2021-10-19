import { SignupPage } from '../../page_objects/signup_page';

describe('logon test suite', () => {
  const signupPage = new SignupPage();
  let testData;
  before(() => {
    cy.fixture('profiles_data').then((data) => {
      testData = data;
      return testData;
    });
  });

  it('check user can signup with valid data', () => {
    signupPage.navigate();
    signupPage.pressCreateNewAccount();
    signupPage.fillFirstName(testData.first_name);
    signupPage.fillLastName(testData.second_name);
    signupPage.fillEmail(testData.email);
    signupPage.confirmEmail(testData.confirm_email);
    signupPage.fillPassword(testData.password);
    signupPage.fillDate(testData.day, testData.month, testData.year);
    signupPage.selectGender(testData.gender);
    signupPage.pressSubmit();
  });
});
