class CartPage {
  addItemToCart() {
    cy.contains('Add to Cart').click();
    cy.log('Added item to cart');
  }

  verifyCartItemCount(count) {
    cy.get('#nav-cart-count').should('contain', count);
    cy.log(`Verified cart item count is: ${count}`);
  }
}

export default CartPage;
