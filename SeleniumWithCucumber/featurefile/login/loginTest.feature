@tag
Feature: Login to application

  @tag1
  Scenario: Login to application
    Given navigate to application
    When user click on sign in link
    And enter email address as "agrawal.rajkumar@gmail.com"
    And enter password as "Selenium"
    And click on sign in button
    Then Login is successful
