class popupPage {

    elements = { 
        loginBtn : () => cy.get('[data-cy="login"]')
    }
  closeButtons(amount) {
    for (var i = 1; i <= amount; i++) {
      cy.get('[id="button-close-' + [i] + '"]').click({ force: true });
    }
  }
  coconutsClick(amount) {
    for (var i = 1; i <= amount; i++) {
    cy.get('.snow > img').eq(i).click({ force: true });
  }
}
}

export default popupPage;
