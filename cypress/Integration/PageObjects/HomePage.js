import locators from '../../fixtures/locators.json';
require('cypress-xpath');


class HomePage
{

   Navigate_Registration()
   {
    cy.xpath(locators.Trybtn).click();
   }
}

export default HomePage;