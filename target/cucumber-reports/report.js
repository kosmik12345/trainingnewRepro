$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/log.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature file",
  "description": "",
  "id": "login-feature-file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters email id \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;1"
    },
    {
      "cells": [
        "prashanthi.skvl@gmail.com",
        "Test@123455"
      ],
      "line": 15,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters email id prashanthi.skvl@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password Test@123455",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_in_login_page()"
});
formatter.result({
  "duration": 14995948800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanthi.skvl@gmail.com",
      "offset": 21
    }
  ],
  "location": "login.user_enters_email_id(String)"
});
formatter.result({
  "duration": 369953600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123455",
      "offset": 21
    }
  ],
  "location": "login.user_enters_password(String)"
});
formatter.result({
  "duration": 125233300,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 1713345100,
  "status": "passed"
});
formatter.match({
  "location": "login.User_should_be_able_to_see_the_error_message()"
});
formatter.result({
  "duration": 45151100,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Invalid email or] but found [Invalid email or password.]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat fortrainingsetpdefinitions.login.User_should_be_able_to_see_the_error_message(login.java:75)\r\n\tat ✽.Then User should be able to see the error message(feature/log.feature:11)\r\n",
  "status": "failed"
});
});