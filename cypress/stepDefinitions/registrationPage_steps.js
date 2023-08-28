import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import RegistrationPage_selectors from "../selectors/registrationPage_selectors.js";

import Common_page from "../pageObjects/common_page.js";

const common_page = new Common_page();

const registrationPage_selectors = new RegistrationPage_selectors();

let registrationPage_data; // Used as a link to the fixtures data.

before(() => {
    cy.fixture("/registrationPage.json").then((registrationDataFile) => {
        registrationPage_data = registrationDataFile;
    });
});


When("I fill in the {string} field on the 'Registration' page with Correct data", (nameInputField) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "InputField");
    const subArray = common_page.removeSpaceAndApplyCamelCase(nameInputField, "correct", "Data");
    const array = common_page.removeSpaceAndApplyCamelCase(nameInputField, "", "Data");

    switch (nameInputField) {
        case "Nick Name":
        case "First Name":
        case "Last Name":

            var rnd = common_page.getRandomIndexValueForArray(registrationPage_data[array][subArray]);

            common_page.typeDataForInputField(registrationPage_selectors[selector], registrationPage_data[array][subArray][rnd]);
            
            break;
        default:
            throw new Error(`Unknown field name data is specified: ${nameInputField}`);
    }
})


// #1
// When("I fill in the 'Nick Name' field on the 'Registration' page with Correct data", () => {
//     var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.nickNameData.correctNickNameData);
//     cy.log("Моё rnd = " + rnd +
//         " Это вот такое значение из нашего массива: " + registrationPage_data.nickNameData.correctNickNameData[rnd])

//     common_page.typeDataForInputField(registrationPage_selectors.userNameInputField, registrationPage_data.nickNameData.correctNickNameData[rnd]);
// })

// When("I fill in the 'First Name' field on the 'Registration' page with Correct data", () => {
//     var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.firstNameData.correctFirstNameData);
//     cy.log("Моё rnd = " + rnd +
//         " Это вот такое значение из нашего массива: " + registrationPage_data.firstNameData.correctFirstNameData[rnd])

//     common_page.typeDataForInputField(registrationPage_selectors.firstNameInputField, registrationPage_data.firstNameData.correctFirstNameData[rnd]);
// })

// When("I fill in the 'Last Name' field on the 'Registration' page with Correct data", () => {
//     var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.lastNameData.correctLastNameData);
//     cy.log("Моё rnd = " + rnd +
//         " Это вот такое значение из нашего массива: " + registrationPage_data.lastNameData.correctLastNameData[rnd])

//     common_page.typeDataForInputField(registrationPage_selectors.lastNameInputField, registrationPage_data.lastNameData.correctLastNameData[rnd]);
// })

// #2
// When("I fill in the {string} field on the 'Registration' page with Correct data", (nameInputField) => {
//     switch (nameInputField) {
//         case "Nick Name":
//             var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.nickNameData.correctNickNameData);

//             cy.log("Моё rnd = " + rnd +
//                 " Это вот такое значение из нашего массива: " + registrationPage_data.nickNameData.correctNickNameData[rnd])

//             common_page.typeDataForInputField(registrationPage_selectors.userNameInputField, registrationPage_data.nickNameData.correctNickNameData[rnd]);
//             break;
//         case "First Name":
//             var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.firstNameData.correctFirstNameData);

//             cy.log("Моё rnd = " + rnd +
//                 " Это вот такое значение из нашего массива: " + registrationPage_data.firstNameData.correctFirstNameData[rnd])

//             common_page.typeDataForInputField(registrationPage_selectors.firstNameInputField, registrationPage_data.firstNameData.correctFirstNameData[rnd]);
//             break;
//         case "Last Name":
//             var rnd = common_page.getRandomIndexValueForArray(registrationPage_data.lastNameData.correctLastNameData);

//             cy.log("Моё rnd = " + rnd +
//                 " Это вот такое значение из нашего массива: " + registrationPage_data.lastNameData.correctLastNameData[rnd])

//             common_page.typeDataForInputField(registrationPage_selectors.lastNameInputField, registrationPage_data.lastNameData.correctLastNameData[rnd]);
//             break;
//         default:
//             throw new Error(`Unknown field name data is specified: ${nameInputField}`);
//     }
// })