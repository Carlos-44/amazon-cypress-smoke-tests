import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';
import SearchPage from '../pageObjects/SearchPage';
import CartPage from '../pageObjects/CartPage';
import CareersPage from '../pageObjects/CareersPage';

describe('Amazon Smoke Test', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const searchPage = new SearchPage();
  const cartPage = new CartPage();
  const careersPage = new CareersPage();

  beforeEach(() => {
    homePage.visit();
    homePage.clearCookies();
  });

  it('Should load the Amazon homepage', () => {
    cy.get('[id="twotabsearchtextbox"]').should('be.visible');
  });

  it('Should login with existing Account', () => {
    homePage.clickAccountAndLists();
    loginPage.enterEmail("ozoria_carlos@yahoo.com");
    loginPage.submitEmail();
    loginPage.enterPassword("Cynthea@1944");
    loginPage.submitLogin();
    loginPage.verifyCaptcha();
  });

  it('Should search for "laptop" and display results', () => {
    homePage.searchForItem('laptop');
    searchPage.verifySearchResults('laptop');
  });

  it('Should navigate to "Today\'s Deals" page and verify the content', () => {
    homePage.navigateToTodaysDeals();
    cy.contains('Today\'s Deals').should('be.visible');
  });

  it('Should navigate to the "Careers" page from the footer link', () => {
    homePage.scrollToFooter();
    careersPage.navigateToCareers();
    cy.contains('Find jobs').should('be.visible');
  });

  it.only('Should add an item to the cart', () => {
    homePage.searchForItem('headphones');
    searchPage.selectFirstResult();
    cartPage.addItemToCart();
    cartPage.verifyCartItemCount('1');
  });
});
