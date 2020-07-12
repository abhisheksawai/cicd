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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-UK7PKGHG\u0027, ip: \u0027192.168.191.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x002F9563+2725219]\n\tOrdinal0 [0x001F8551+1672529]\n\tOrdinal0 [0x000E0202+524802]\n\tOrdinal0 [0x000D99B2+498098]\n\tOrdinal0 [0x000DA09B+499867]\n\tOrdinal0 [0x000DAFF5+503797]\n\tOrdinal0 [0x000D6994+485780]\n\tOrdinal0 [0x000E0FF0+528368]\n\tOrdinal0 [0x0008D6C9+186057]\n\tOrdinal0 [0x0008CA3D+182845]\n\tOrdinal0 [0x0008A94B+174411]\n\tOrdinal0 [0x00072528+75048]\n\tOrdinal0 [0x000735A0+79264]\n\tOrdinal0 [0x00073539+79161]\n\tOrdinal0 [0x0020D607+1758727]\n\tGetHandleVerifier [0x00416546+1050150]\n\tGetHandleVerifier [0x00416291+1049457]\n\tGetHandleVerifier [0x004210D7+1094071]\n\tGetHandleVerifier [0x00416B46+1051686]\n\tOrdinal0 [0x00205B06+1727238]\n\tOrdinal0 [0x0020EB7B+1764219]\n\tOrdinal0 [0x0020ECE3+1764579]\n\tOrdinal0 [0x00224C05+1854469]\n\tBaseThreadInitThunk [0x75AA6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77357C24+228]\n\tRtlGetAppContainerNamedObjectPath [0x77357BF4+180]\n\t(No symbol) [0x00000000]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Stepdefinition.smokeTest.Open_Chrome_and_start_applicaiton(smokeTest.java:29)\r\n\tat ✽.Open Chrome and start applicaiton(FeatureFile\\myapplication.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter \"vishal\" and password",
  "keyword": "When "
});
formatter.match({
  "location": "smokeTest.i_enter_and_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.User_should_be_login_successfully()"
});
formatter.result({
  "status": "skipped"
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