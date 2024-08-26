class HomePage {
  visit() {
    cy.visit('https://www.amazon.com');
    cy.log('Visited Amazon homepage');
  }

  clearCookies() {
    cy.clearCookies();
    cy.log('Cleared cookies');
  }

  verifyPageLoaded() {
    cy.get('[id="twotabsearchtextbox"]').should('be.visible');
    cy.log('Amazon homepage loaded successfully');
  }

  searchForItem(item) {
    cy.get('[id="twotabsearchtextbox"]')
      .should('be.visible')
      .type(`${item}{enter}`); // Type the search term and press enter
    cy.log(`Searched for item: ${item}`);
  }

  selectCategory(category) {
    cy.get('#searchDropdownBox')
      .scrollIntoView()
      .select(category, { force: true });
    cy.log(`Selected category: ${category}`);
  }

  verifySelectedCategory(category) {
    cy.get('#searchDropdownBox').should('have.value', category);
    cy.log(`Verified selected category: ${category}`);
  }

  navigateToTodaysDeals() {
    cy.contains("Today's Deals").click();
    cy.url().should('include', '/deals');
    cy.get('span.nav-a-content').should('be.visible').and('contain.text', "Today's Deals");
    cy.log("Navigated to Today's Deals and verified the presence of 'Today's Deals' text.");
  }

  scrollToFooter() {
    cy.scrollTo('bottom');
    cy.log('Scrolled to footer');
  }

  clickAccountAndLists() {
    cy.contains('Account & Lists').click();
    cy.log('Clicked on Account & Lists');
  }

  verifyMensFashionButton() {
    cy.get('span.sf-rib-v1-dropdown-pill-text')
      .should('be.visible')
      //.and('contain.text', "Men's Fashion");
    cy.log("Verified that 'Men's Fashion' button is present on the page.");
  }

  searchMensGraphicTShirt() {
    this.searchForItem("men's graphic t-shirt");
    cy.log('Searching for men\'s graphic t-shirt');
  }

  verifyResultsPage() {
    this.verifyMensFashionButton();
  }
}

export default HomePage;
