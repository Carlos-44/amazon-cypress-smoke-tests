class CareersPage {
    navigateToCareers() {
      cy.contains('Careers').scrollIntoView().should('be.visible').click();
    }
  }
  
  export default CareersPage;
  