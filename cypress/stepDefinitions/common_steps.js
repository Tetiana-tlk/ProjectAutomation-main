import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

import LoginPage_selectors from "../selectors/loginPage_selectors.js";

const loginPage_selectors = new LoginPage_selectors();

let common_data; // Used as a link to the fixtures data.

before(() => {
    cy.fixture("/common.json").then((commonDataFile) => {
        common_data = commonDataFile;
    });
});


//dz+dz2+test 29/09+test 2_test3+test4
When("I wait for {string} seconds", (waitingTime) => {
    switch (waitingTime) {
        case "2":
            cy.wait(common_data.twoSeconds);
            break;
        case "3":
            cy.wait(common_data.threeSeconds);
            break;
        case "7":
            cy.wait(common_data.sevenSeconds);
            break;
        default:
            throw new Error(`Unknown time data is specified: ${waitingTime}`);
    }
})

Then("I should see that {string} field on the 'Login' page is displayed", (nameImputField) => {
    switch (nameImputField) {
        case "Email":
            cy.get(loginPage_selectors.emailInputField).should("be.visible");
            break;
        case "Password":
            cy.get(loginPage_selectors.passwordInputField).should("be.visible");
            break;
        default:
            throw new Error(`Unknown field name data is specified: ${nameImputField}`);
    }
})

When("I navigate to {string} page", (pageURL) => {
    const subArray = common_page.removeSpaceAndApplyCamelCase(pageURL, "", "pageURL");
    switch (pageURL) {
        case "Home":
            cy.visit(common_data.homePageURL);
            break;
        case "Login":
            cy.visit(common_data.loginPageURL);
            break;
        case "Vacancies":
            cy.visit(common_data.vacanciesPageURL);
            break;
        case "Registration":
            cy.visit(common_data.registrationPageURL);
            break;
        default:
            throw new Error(`Unknown page is specified: ${pageURL}`);
    }
})