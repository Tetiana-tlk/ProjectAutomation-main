import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObjects/homePage_page.js";
import HomePage_selectors from "../selectors/homePage_selectors.js";
import Common_page from "../pageObjects/common_page.js";

const common_page = new Common_page();

const homePage = new HomePage();
const homePage_selectors = new HomePage_selectors();

before(() => {
    cy.visit("https://bloomenty.com/nl/home");
    cy.session("cookie", () => {
    });
});

let homePage_data; // Used as a link to the fixtures data.

before(() => {
    cy.fixture("/homePage.json").then((homeDataFile) => {
        homePage_data = homeDataFile;
    });
});

When("I press {string} button on the 'Cookies' page", (buttonName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(buttonName, "", "ButtonCookiesPage");
    switch (buttonName) {
        case "Cancel":
        case "Accept":
            cy.get(homePage_selectors[selector]).click();
            break;
        default:
            throw new Error(`Unknown button name data specified: ${buttonName}`);
    }

});

// When("I press {string} button on the 'Cookies' page"), (buttonName) => {
//     const selector = common_page.removeSpaceAndApplyCamelCase(buttonName, "", "ButtonCookiesPage");

//     switch (buttonName) {
//         case "Accept":   
//         case "Cancel":
//             cy.get(homePage_selectors[selector]).click();
//             break;
//         default:
//             throw new Error(`Unknown button name is specified: ${buttonName}`);
//     }
// }

When("I should see correct 'Online platform' page header", () => {
    cy.get(homePage_selectors.onlinePlatformVoorBloemenProfessionalsTitle).should("contain", homePage_data.onlinePlatformPageHeader);
});

// When("I navigate to 'Home' page", () => {
//   cy.visit("https://bloomenty.com/nl/home");
// });

When("I should see that 'Cookies' page is displayed", () => {
    homePage.checkCookiesPageIsVisible();
});

When("I should see that 'Cookies' page is Not displayed", () => {
    homePage.checkCookiesPageIsNotVisible();
});

When("I should see that 'Cookies rules' is opened", () => {
    cy.get(homePage_selectors.cookiesRules).should("be.visible")
});

When("I select 'Cookies page' link on the 'Cookies' page", () => {
    cy.get(homePage_selectors.cookiesPageLink).invoke('removeAttr', 'target').click();
});

// When("I press 'Cancel' button on the 'Cookies' page", () => {
//     cy.get(homePage_selectors.rejectCookiesButton).click();
// });

// When("I press 'Accept' button on the 'Cookies' page", () => {
//     cy.get(homePage_selectors.acceptButtonCookiesPage).click();
// });

When("I select 'Vacancies' sub-menu", () => {
    cy.get(homePage_selectors.vacanciesSubMenu).click();
});

When("I clear all Cookies", () => {
    cy.clearCookies();
});

When("I refresh the page", () => {
    cy.reload();
});

// When("I wait for 3 seconds", () => {
//   cy.wait(3000);
// });

// When("I navigate to 'Vacancies' page", () => {
//   cy.visit("https://bloomenty.com/nl/vacancies");
// });

When("I press 'Back' button in the Browser", () => {
    cy.go("back");
});
When("I press 'Forward' button in the Browser", () => {
    cy.go("forward");
});

Then("I should see that 'CookiesPage' link is correct", () => {
    cy.get(homePage_selectors.cookiesPageLink)
        .should("have.attr", "href", "/nl/official-docs#cookie-files")
});

Then("I should see {string} on the 'Cookies' page", (itemCookiesPage) => {
    cy.get("itemCookiesPage").should("be.visible");
});

// проверка по селектору

Then("I should see {string} page is displayed", () => {
    cy.get(".title")
        .should("be.visible")
});

// проверка по URL
/*
Then("I should see 'Vacancies' page is displayed", () => {         
    cy.url().should('include', '//bloomenty.com/nl/vacancies')
});
*/
When("I press 'Login' button on the 'Home' page", () => {
    cy.get(homePage_selectors.enterButtonHeader).click();
});


