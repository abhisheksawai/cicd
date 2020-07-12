$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFile\\myapplication.feature");
formatter.feature({
  "name": "Test Facebook",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test login with cred",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start applicaiton",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter \"\u003cUsername\u003e\" and password",
  "keyword": "When "
});
formatter.step({
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username"
      ]
    },
    {
      "cells": [
        "Abhijeet"
      ]
    },
    {
      "cells": [
        "vishal"
      ]
    },
    {
      "cells": [
        "Jayanta"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test login with cred",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start applicaiton",
  "keyword": "Given "
});
formatter.match({
  "location": "smokeTest.Open_Chrome_and_start_applicaiton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Abhijeet\" and password",
  "keyword": "When "
});
formatter.match({
  "location": "smokeTest.i_enter_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.User_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with cred",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start applicaiton",
  "keyword": "Given "
});
formatter.match({
  "location": "smokeTest.Open_Chrome_and_start_applicaiton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"vishal\" and password",
  "keyword": "When "
});
formatter.match({
  "location": "smokeTest.i_enter_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.User_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test login with cred",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Open Chrome and start applicaiton",
  "keyword": "Given "
});
formatter.match({
  "location": "smokeTest.Open_Chrome_and_start_applicaiton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Jayanta\" and password",
  "keyword": "When "
});
formatter.match({
  "location": "smokeTest.i_enter_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.User_should_be_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});