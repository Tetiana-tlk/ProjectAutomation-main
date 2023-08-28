Feature: Verification of Bloomenty Registration page

Scenario:Verify...
Given I navigate to "Home" page
And I wait for "3" seconds
And I press 'Accept' button on the 'Cookies' page
When I navigate to "Registration" page
And I fill in the "Nick Name" field on the 'Registration' page with Correct data

Scenario:Verify...
Given I navigate to "Registration" page
When I fill in the "First Name" field on the 'Registration' page with Correct data

Scenario:Verify...
Given I navigate to "Registration" page
When I fill in the "Last Name" field on the 'Registration' page with Correct data