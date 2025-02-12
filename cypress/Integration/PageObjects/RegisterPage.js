import locators from '../../fixtures/locators.json';

class LoginPage
{

    Select_Feature()
    {
     cy.xpath(locators.Notsurebtn).click();
     cy.xpath(locators.trackingbtn).click();
    }

    Enter_Values()
    {
        cy.generateTestData().then((testData) => {

            cy.EnterValues(locators.Name, testData.name);
            cy.EnterValues(locators.Email, testData.email);
            cy.EnterValues(locators.Mobile, testData.mobile);
            cy.EnterValues(locators.pwd, testData.password);
          });
    }
    Tap_Tracking()
    {
        cy.xpath(locators.tracking).click();
    }
    Tap_Business()
    {
        cy.xpath(locators.business).click();
    }
    Enter_Service()
    {
        cy.xpath(locators.service).type("Test");
    }
    Enter_Price()
    {
        cy.xpath(locators.price).type(33);
    }
    Tap_Done()
    {
        cy.xpath(locators.done).click();
    }
    Get_Success()
    {
        cy.xpath(locators.success).then((txt)=>{
            console.log(txt.text());
        })
    }

}

export default LoginPage;