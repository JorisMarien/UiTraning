class dancePage{

    elements = { 
         kongBtn : () => cy.get('.kong > img'),
         bananaBtn : () => cy.get('#banana')
     }
     
     kingKongClick() {
        this.elements.kongBtn().click();
        this.elements.bananaBtn().click();
        
    }
  }
  
  export default dancePage;