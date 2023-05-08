class loginPage{

    elements = { 
         usernameInput : () => cy.get('[data-cy="user-name"]'),      
         passwordInput : () => cy.get('[data-cy="password"]'),    
         loginBtn : () => cy.get('[data-cy="login"]')
     }
     enterUsername(username)
   {
       this.elements.usernameInput().clear();
       this.elements.usernameInput().type(username);
   }

   enterPassword(password)
   {
       this.elements.passwordInput().clear();
       this.elements.passwordInput().type(password);
   }
  
   clickSubmit() {
       this.elements.loginBtn().click();
   }
  }
  
  export default loginPage;