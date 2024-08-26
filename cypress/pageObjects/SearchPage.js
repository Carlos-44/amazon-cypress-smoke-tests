class SearchPage {
    verifySearchResults(text) {
      cy.get('.s-main-slot').should('contain.text', text);
      cy.log(`Verified search results contain: ${text}`);
    }
  
    selectFirstResult() {
      cy.get('.s-main-slot .s-result-item').first().click();
      cy.log('Selected the first search result');
    }
  
    filterResultsByBrand(brand) {
      cy.contains(brand).click();
      cy.log(`Filtered results by brand: ${brand}`);
    }
  
    sortBy(option) {
      cy.get('#s-result-sort-select').select(option);
      cy.log(`Sorted results by option: ${option}`);
    }
  }
  
  export default SearchPage;
  
