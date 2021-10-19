Cypress.Commands.add('generateCookie', (username, password) => {
  cy.request({
    method: 'POST',
    url: '/auth/api/v1/login',
    body:
    {
      username,
      password,
    },
  }).then((response) => response.headers['set-cookie'][3]);
});
