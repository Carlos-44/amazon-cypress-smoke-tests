class CareersPage {
    navigateToCareers() {
      cy.contains('Careers').scrollIntoView().click();
      cy.log('Navigated to Careers page');
    }
  
    verifyFindJobsText() {
      cy.origin('https://www.amazon.jobs', () => {
        cy.contains('Find jobs').should('be.visible');
        cy.log('Verified Find Jobs text is visible');
      });
    }
  }
  
  export default CareersPage;
  
