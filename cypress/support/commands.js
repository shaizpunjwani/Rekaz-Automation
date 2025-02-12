// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';
require('cypress-xpath');



Cypress.Commands.add("EnterValues", (locator, data)=>{
    cy.xpath(locator).type(data);
});

Cypress.Commands.add('generateTestData', () => {
    const name = faker.person.fullName(); // Generates a random full name
    const email = faker.internet.email({ provider: 'gmail.com' }).toLowerCase(); // Random email with @gmail.com
    const mobile = `05${faker.string.numeric(8)}`; // Starts with 05 + 8 random digits
    const password = faker.internet.password({ length: 12, memorable: false, pattern: /[A-Za-z0-9!@#$%^&*]/ }); // Strong password
  
    return { name, email, mobile, password };
  });