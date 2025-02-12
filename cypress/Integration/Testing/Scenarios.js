/// <reference types="Cypress" />

import RegisterPage from "../PageObjects/RegisterPage";
import HomePage from "../PageObjects/HomePage";


describe("Scenario Suite", function(){

    const regpg = new RegisterPage();
    const homepg=new HomePage();

    beforeEach(()=>{

        cy.visit(Cypress.env("url"));
        
    });

    it("Registration Flow", function(){
        homepg.Navigate_Registration();
        regpg.Select_Feature();
        regpg.Enter_Values();
        regpg.Tap_Tracking();
        regpg.Tap_Business();
        regpg.Enter_Service();
        regpg.Enter_Price();
        regpg.Get_Success();
    });
})