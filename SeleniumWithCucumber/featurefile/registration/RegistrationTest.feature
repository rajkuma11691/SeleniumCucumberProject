Feature: Registrtion.

  Scenario Outline: Registar user
    Given open browser navigate to application 
    When click on signin link
    And enter registration "<emailID>"
    And click on create an account
    Then registration firm open
    And select mr radion button
    And enter first Name "<firstName>"
    And enter last Name "<lastName>"
    And enter password  "<password>"
    And select day "<day>"
    And select month "<month>"
    And select year "<year>"
    And enter your address first Name "<addressFirstName>"
    And enter your address last Name "<addressLastName>"
    And enter your company Name "<addressCompanyName>"
    And enter Address "<address>"
    And enter Address city "<city>"
    And select state "<state>"
    And select zipcode "<zipcode>"
    And Select mobile phone nymber "<mobilePhoneNumber>"
    And Assign an address alias "<addressAlias>"
    And click on registration button
    Then verify Registration success message

    Examples: 
     |emailID       | firstName    | lastName    | password  | day | month    | year | addressFirstName    | addressLastName    | addressCompanyName    | address  | city      | state  | zipcode | mobilePhoneNumber | addressAlias  |
     |rajabcde@gmail.com | firstNameone | lastNameone | password1 |   3 | February | 2013 | addressFirstNameone | addressLastNameone | addressCompanyNameone | address1 | Mumbai | Alaska |   99501 |        9999999999 | addressAlias1 |
      
