$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/registration/RegistrationTest.feature");
formatter.feature({
  "line": 1,
  "name": "Registrtion.",
  "description": "",
  "id": "registrtion.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Registar user",
  "description": "",
  "id": "registrtion.;registar-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter registration \"\u003cemailID\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "registration firm open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select mr radion button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter first Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter password  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter your address first Name \"\u003caddressFirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter your address last Name \"\u003caddressLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "enter your company Name \"\u003caddressCompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "enter Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter Address city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select zipcode \"\u003czipcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select mobile phone nymber \"\u003cmobilePhoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Assign an address alias \"\u003caddressAlias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify Registration success message",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "registrtion.;registar-user;",
  "rows": [
    {
      "cells": [
        "emailID",
        "firstName",
        "lastName",
        "password",
        "day",
        "month",
        "year",
        "addressFirstName",
        "addressLastName",
        "addressCompanyName",
        "address",
        "city",
        "state",
        "zipcode",
        "mobilePhoneNumber",
        "addressAlias"
      ],
      "line": 29,
      "id": "registrtion.;registar-user;;1"
    },
    {
      "cells": [
        "rajabcde@gmail.com",
        "firstNameone",
        "lastNameone",
        "password1",
        "3",
        "February",
        "2013",
        "addressFirstNameone",
        "addressLastNameone",
        "addressCompanyNameone",
        "address1",
        "Mumbai",
        "Alaska",
        "99501",
        "9999999999",
        "addressAlias1"
      ],
      "line": 30,
      "id": "registrtion.;registar-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Registar user",
  "description": "",
  "id": "registrtion.;registar-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open browser navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter registration \"rajabcde@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "registration firm open",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "select mr radion button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "enter first Name \"firstNameone\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter last Name \"lastNameone\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter password  \"password1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select day \"3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select month \"February\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "select year \"2013\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter your address first Name \"addressFirstNameone\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter your address last Name \"addressLastNameone\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "enter your company Name \"addressCompanyNameone\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "enter Address \"address1\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter Address city \"Mumbai\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "select state \"Alaska\"",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "select zipcode \"99501\"",
  "matchedColumns": [
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select mobile phone nymber \"9999999999\"",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Assign an address alias \"addressAlias1\"",
  "matchedColumns": [
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "verify Registration success message",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Registration.open_browser_navigate_to_application()"
});
formatter.result({
  "duration": 63158823844,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.click_on_signin_link()"
});
formatter.result({
  "duration": 19145092084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rajabcde@gmail.com",
      "offset": 20
    }
  ],
  "location": "Step_Registration.enter_registration(String)"
});
formatter.result({
  "duration": 3942308243,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.click_on_create_an_account()"
});
formatter.result({
  "duration": 4097381513,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.registration_firm_open()"
});
formatter.result({
  "duration": 411088,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.select_mr_radion_button()"
});
formatter.result({
  "duration": 2008972100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstNameone",
      "offset": 18
    }
  ],
  "location": "Step_Registration.enter_first_Name(String)"
});
formatter.result({
  "duration": 885989662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastNameone",
      "offset": 17
    }
  ],
  "location": "Step_Registration.enter_last_Name(String)"
});
formatter.result({
  "duration": 573777417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 17
    }
  ],
  "location": "Step_Registration.enter_password(String)"
});
formatter.result({
  "duration": 437583426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "Step_Registration.select_day(String)"
});
formatter.result({
  "duration": 474133027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 14
    }
  ],
  "location": "Step_Registration.select_month(String)"
});
formatter.result({
  "duration": 424356749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2013",
      "offset": 13
    }
  ],
  "location": "Step_Registration.select_year(String)"
});
formatter.result({
  "duration": 873360440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addressFirstNameone",
      "offset": 31
    }
  ],
  "location": "Step_Registration.enter_your_address_first_Name(String)"
});
formatter.result({
  "duration": 689465061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addressLastNameone",
      "offset": 30
    }
  ],
  "location": "Step_Registration.enter_your_address_last_Name(String)"
});
formatter.result({
  "duration": 555231438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addressCompanyNameone",
      "offset": 25
    }
  ],
  "location": "Step_Registration.enter_your_company_Name(String)"
});
formatter.result({
  "duration": 452779655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "address1",
      "offset": 15
    }
  ],
  "location": "Step_Registration.enter_Address(String)"
});
formatter.result({
  "duration": 349763908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai",
      "offset": 20
    }
  ],
  "location": "Step_Registration.enter_Address_city(String)"
});
formatter.result({
  "duration": 446013711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alaska",
      "offset": 14
    }
  ],
  "location": "Step_Registration.select_state(String)"
});
formatter.result({
  "duration": 340669723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99501",
      "offset": 16
    }
  ],
  "location": "Step_Registration.select_zipcode(String)"
});
formatter.result({
  "duration": 295554248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 28
    }
  ],
  "location": "Step_Registration.select_mobile_phone_nymber(String)"
});
formatter.result({
  "duration": 288138450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addressAlias1",
      "offset": 25
    }
  ],
  "location": "Step_Registration.assign_an_address_alias(String)"
});
formatter.result({
  "duration": 291041458,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.click_on_registration_button()"
});
formatter.result({
  "duration": 5206253514,
  "status": "passed"
});
formatter.match({
  "location": "Step_Registration.verify_Registration_success_message()"
});
formatter.result({
  "duration": 8000506703,
  "status": "passed"
});
});