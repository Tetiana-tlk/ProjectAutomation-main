Feature: Verification of Bloomenty Login page

  Scenario: Verify 'Login' button from the Home page
    When I navigate to "Home" page
    And I wait for "3" seconds
    And I press 'Cancel' button on the 'Cookies' page
    And I press 'Login' button on the 'Home' page
    Then I should see that 'Login' page is displayed
    And I should see that 'Login' page URL is correct

#   Scenario: Verify 'Login' button from the Home page
    When I navigate to "Login" page
    And I wait for "3" seconds
    Then I should see that "Email" field on the 'Login' page is displayed
    And I should see that "Password" field on the 'Login' page is displayed

  Scenario: Verify 'No symbols before At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols before At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'No symbols after At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols after At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'No symbols after Dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No symbols after Dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'No Dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No Dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'No At' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "No At" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'One symbols after Dot' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "One symbols after Dot" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'Correct' input data for 'Email' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see that avatar on the 'My account' page is displayed
    And I should see that 'My account' title on the 'My account' page is displayed

  Scenario: Verify 'No symbols' input data for 'Password' field
    Given I clear all Cookies
    And I navigate to "Login" page
    And I press 'Accept' button on the 'Cookies' page
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "No symbols" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'One symbol' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "One symbol" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'One letter' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "One letter" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'Upper case password' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "Upper case password" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'One dot' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "One dot" data
    And I press 'Login' button on the 'Login' page
    Then I should see 'Invalid email address or password!'error message is displayed

  Scenario: Verify 'Correct' input data for 'Password' field
    When I fill in the 'Email' field on the 'Login' page with "Correct" data
    And I fill in the 'Password' field on the 'Login' page with "Correct" data
    And I press 'Login' button on the 'Login' page
    Then I should see that avatar on the 'My account' page is displayed
    And I should see that 'My account' title on the 'My account' page is displayed
