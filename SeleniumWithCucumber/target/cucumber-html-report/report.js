$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/login/loginTest.feature");
formatter.feature({
  "line": 2,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Login to application",
  "description": "",
  "id": "login-to-application;login-to-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "navigate to application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "enter email address as \"agrawal.rajkumar@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter password as \"Selenium\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_LoginToApplication.navigate_to_application()"
});
formatter.result({
  "duration": 36448001388,
  "status": "passed"
});
formatter.match({
  "location": "Step_LoginToApplication.user_click_on_sign_in_link()"
});
formatter.result({
  "duration": 9777894580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "agrawal.rajkumar@gmail.com",
      "offset": 24
    }
  ],
  "location": "Step_LoginToApplication.enter_email_address_as(String)"
});
formatter.result({
  "duration": 836883313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 19
    }
  ],
  "location": "Step_LoginToApplication.enter_password_as(String)"
});
formatter.result({
  "duration": 605989464,
  "status": "passed"
});
formatter.match({
  "location": "Step_LoginToApplication.click_on_sign_in_button()"
});
formatter.result({
  "duration": 3709382211,
  "status": "passed"
});
formatter.match({
  "location": "Step_LoginToApplication.login_is_successful()"
});
formatter.result({
  "duration": 336541,
  "status": "passed"
});
});