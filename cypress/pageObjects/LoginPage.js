class LoginPage {
  enterEmail(email) {
    cy.get('[name="email"]').type(email);
  }

  submitEmail() {
    cy.get('[type="submit"]').click();
  }

  enterPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  submitLogin() {
    cy.get('[id="signInSubmit"]').click();
  }

  verifyCaptcha() {
    cy.contains('Solve this puzzle to protect your account').should('be.visible');
  }
}

export default LoginPage;
