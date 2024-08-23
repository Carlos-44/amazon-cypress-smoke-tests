class CartPage {
    addItemToCart() {
      cy.contains('Add to Cart').click();
    }
  
    verifyCartItemCount(count) {
      cy.get('#nav-cart-count').should('contain', count);
    }
  }
  
  export default CartPage;
  