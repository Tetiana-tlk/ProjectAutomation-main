import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage_selectors from "../selectors/loginPage_selectors.js";
import Common_page from "../pageObjects/common_page.js";

const common_page = new Common_page();
const loginPage_selectors = new LoginPage_selectors();

let loginPage_data; // Used as a link to the fixtures data.

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
        loginPage_data = loginDataFile;
    });
});

// When("I navigate to 'Login' page", () => {
//     cy.visit("https://bloomenty.com/ru/myaccount/login");
//   });

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible");
});

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include', loginPage_data.URLs.myAccountURL);
});

//   Then("I should see that 'Email' field on the 'Login' page is displayed", () => {
//     cy.get(loginPage_selectors.emailInputField).should("be.visible");
//   });

//   Then("I should see that 'Password' field on the 'Login' page is displayed", () => {
//     cy.get(loginPage_selectors.passwordInputField).should("be.visible");
//   })

When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.submitButton).click();
});

//   When("I fill in the 'Password' field on the 'Login' page with 'testtaty1'", () => {
//     cy.get(loginPage_selectors.passwordInputField).clear().type("testtaty1");
//   })

Then("I should see that avatar on the 'My account' page is displayed", () => {
    cy.get(loginPage_selectors.avatarHeaderUserImage).should("be.visible");
})

Then("I should see that 'My account' title on the 'My account' page is displayed", () => {
})

When("I fill in the 'Email' field on the 'Login' page with 'Correct' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailInputCorrectData);
})

//   When("I fill in the 'Email' field on the 'Login' page with 'No symbols before At' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsBeforeAt);
//   })

//   When("I fill in the 'Email' field on the 'Login' page with 'No symbols after At' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsAfterAt);
//   })

//   When("I fill in the 'Email' field on the 'Login' page with 'No symbols after Dot' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noSymbolsAfterDot);
//   })

//   When("I fill in the 'Email' field on the 'Login' page with 'No Dot' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noDot);
//   })

//   When("I fill in the 'Email' field on the 'Login' page with 'No At' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.noAt);
//   })

//   When("I fill in the 'Email' field on the 'Login' page with 'One symbols after Dot' data", () => {
//     cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.incorrectEmailData.oneSymbolsAfterDot);
//   })

Then("I should see 'Invalid email address or password!'error message is displayed", () => {
    cy.get(loginPage_selectors.invalidEmailAddressOrPassword).should("be.visible");
});

When("I fill in the 'Email' field on the 'Login' page with {string} data", (emailInputData) => {
    switch (emailInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailInputCorrectData);
            break;
        case "No symbols before At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.noSymbolsBeforeAt);
            break;
        case "No symbols after At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.noSymbolsAfterAt);
            break;
        case "No symbols after Dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.noSymbolsAfterDot);
            break;
        case "No Dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.noDot);
            break;
        case "No At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.noAt);
            break;
        case "One symbols after Dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField,
                loginPage_data.emailData.incorrectEmailData.oneSymbolsAfterDot);
            break;

        default:
            throw new Error(`Unknown email data is specified: ${emailInputData}`);
    }
})

When("I fill in the 'Password' field on the 'Login' page with {string} data", (passwordInputData) => {
    switch (passwordInputData) {
        case "Correct":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordCorrectData);
            break;
        case "No symbols":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.noSymbols);
            break;
        case "One symbol":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.oneSymbol);
            break;
        case "One letter":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.oneLetter);
            break;
        case "Upper case password":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.upperCasePassword);
            break;
        case "One dot":
            cy.get(loginPage_selectors.passwordInputField).clear().type(loginPage_data.passwordData.incorrectPasswordData.oneDot);
            break;

        default:
            throw new Error(`Unknown password data is specified: ${passwordInputData}`);
    }
})



