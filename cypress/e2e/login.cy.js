import loginPage from '../pageobjects/loginPage'
import formPage from '../pageobjects/formPage'
import popupPage from '../pageobjects/popupPage'
import dancePage from '../pageobjects/dancePage'

describe('goThroughForm', () => {
  beforeEach(function() {
    cy.visit('http://ui-training-application.s3-website-eu-west-1.amazonaws.com/');
 })
 
 
  it('login', () => {
    const loginObj = new loginPage();
    loginObj.enterUsername('admin');
    loginObj.enterPassword('admin');
    loginObj.clickSubmit();

    const formObj = new formPage();
    formObj.enterName('jef');
    formObj.enterLastName('jos');
    formObj.enterPhone('041234568');
    formObj.enterAttendees('1');
    formObj.enterEmail('lol@lol.com');
    formObj.clickSubmit();

    const popupObj = new popupPage();
    popupObj.closeButtons(9);
    loginObj.clickSubmit();

    popupObj.coconutsClick(15);
    loginObj.clickSubmit();
    
    const danceObj = new dancePage();
    danceObj.kingKongClick();
  })
})