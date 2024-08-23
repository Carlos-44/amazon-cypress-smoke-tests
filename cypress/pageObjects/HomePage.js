class HomePage {
    visit() {
      cy.visit('https://www.amazon.com');
    }
  
    clearCookies() {
      cy.clearCookies();
    }
  
    searchForItem(item) {
      cy.get('[id="twotabsearchtextbox"]').type(item);
      cy.get('[id="nav-search-submit-button"]').click();
    }
  
    clickAccountAndLists() {
      cy.contains('Account & Lists').click();
    }
  
    navigateToTodaysDeals() {
      cy.contains("Today's Deals").click();
    }
  
    scrollToFooter() {
      cy.scrollTo('bottom');
    }
  }
  
  export default HomePage;
  