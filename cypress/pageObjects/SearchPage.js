class SearchPage {
    verifySearchResults(item) {
      cy.get('.s-main-slot').should('contain', item);
    }
  
    selectFirstResult() {
      cy.get('.s-main-slot .s-result-item').first().click();
    }
  }
  
  export default SearchPage;
  