import { LoginPage } from '../../page_objects/login_page';

describe('logon test suie', () => {
  const loginPage = new LoginPage();
  let testData;
  before(() => {
    cy.fixture('profiles_data').then((data) => {
      testData = data;
      return testData;
    });
    loginPage.navigate();
  });

  it('check user can login successfully with valid email and password', () => {
    loginPage.writeEmail(testData.email);
    loginPage.fillPassword(testData.password);
    loginPage.pressLogin();
  });
});
