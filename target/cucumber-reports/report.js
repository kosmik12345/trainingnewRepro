$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginstudios.feature");
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
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters email id \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;1"
    },
    {
      "cells": [
        "\"prashanthi.skvl@gmail.com\"",
        "\"Test@123\""
      ],
      "line": 14,
      "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to login to the application",
  "description": "",
  "id": "login-feature-file;user-should-be-able-to-login-to-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters email id \"prashanthi.skvl@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password \"Test@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks the signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstudioStepdefination.user_is_in_login_page()"
});
formatter.result({
  "duration": 7059423000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prashanthi.skvl@gmail.com",
      "offset": 22
    }
  ],
  "location": "loginstudioStepdefination.user_enters_email_id(String)"
});
formatter.result({
  "duration": 263691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@123",
      "offset": 22
    }
  ],
  "location": "loginstudioStepdefination.user_enters_password(String)"
});
formatter.result({
  "duration": 73120700,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_clicks_the_signin_button()"
});
formatter.result({
  "duration": 1295751500,
  "status": "passed"
});
formatter.match({
  "location": "loginstudioStepdefination.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 30099900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.107)\nBuild info: version: \u00274.2.2\u0027, revision: \u0027683ccb65d6\u0027\nSystem info: host: \u0027LAPTOP-RB73I23S\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [092a33bf7c5dbf7ed7be136ba48b6271, findElement {using\u003dxpath, value\u003d//h3[text()\u003d\u0027My Projects\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\kalya\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50595}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50595/devtoo..., se:cdpVersion: 107.0.5304.107, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 092a33bf7c5dbf7ed7be136ba48b6271\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:588)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:398)\r\n\tat kosmikpages.Allprojects.captureMyProjectsText(Allprojects.java:40)\r\n\tat StepdefincationStudio.loginstudioStepdefination.user_should_be_logged_in_successfully(loginstudioStepdefination.java:45)\r\n\tat ✽.Then User should be logged in successfully(loginstudios.feature:10)\r\n",
  "status": "failed"
});
});