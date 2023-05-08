class formPage{

    elements = { 
         nameInput : () => cy.get('[data-cy="user-name"]'),
         lastNameInput : () => cy.get('[data-cy="lastName"]'),
         phoneInput : () => cy.get('[data-cy="phone"]'),
         attendeesInput : () => cy.get('[data-cy="attendees"]'),
         emailInput : () => cy.get('[data-cy="email"]'),
         loginBtn : () => cy.get('[data-cy="login"]')
     }
     enterName(username)
     {
         this.elements.nameInput().clear();
         this.elements.nameInput().type(username);
     }
     enterLastName(lastName)
     {
         this.elements.lastNameInput().clear();
         this.elements.lastNameInput().type(lastName);
     }
     enterPhone(phoneNumber)
     {
         this.elements.phoneInput().clear();
         this.elements.phoneInput().type(phoneNumber);
     }
     enterAttendees(attendees)
     {
         this.elements.attendeesInput().clear();
         this.elements.attendeesInput().type(attendees);
     }
     enterEmail(email)
     {
         this.elements.emailInput().clear();
         this.elements.emailInput().type(email);
     }
     clickSubmit() {
        this.elements.loginBtn().click();
    }
  }
  
  export default formPage;