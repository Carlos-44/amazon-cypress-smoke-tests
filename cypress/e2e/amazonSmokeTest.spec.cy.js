import HomePage from "../pageObjects/HomePage";
import SearchPage from "../pageObjects/SearchPage";
import CartPage from "../pageObjects/CartPage";
import CareersPage from "../pageObjects/CareersPage";

describe("Amazon Smoke Test", () => {
  const homePage = new HomePage();  // Initialize the HomePage class
  const searchPage = new SearchPage(); // Initialize the SearchPage class
  const cartPage = new CartPage();  // Initialize the CartPage class
  const careersPage = new CareersPage(); // Initialize the CareersPage class

  beforeEach(() => {
    cy.setupAmazonTest(); // Custom command to handle setup
  });

  it("Should load the Amazon homepage", () => {
    homePage.verifyPageLoaded();
  });

  it('Should search for "laptop" and display results', () => {
    homePage.searchForItem("laptop");
    searchPage.verifySearchResults("laptop");
  });

  it('Should navigate to "Today\'s Deals" page and verify the content', () => {
    homePage.navigateToTodaysDeals();
  });

  it('Should navigate to the "Careers" page from the footer link', () => {
    homePage.scrollToFooter();
    careersPage.navigateToCareers();
    careersPage.verifyFindJobsText();
  });

  it('Should search for men\'s graphic t-shirt and verify Men\'s Fashion button', () => {
    homePage.visit();
    homePage.clearCookies();
    homePage.verifyPageLoaded();
    homePage.searchMensGraphicTShirt(); // Search for men's graphic t-shirt
    homePage.verifyResultsPage(); // Verify Men's Fashion button on the results page
  });
});
