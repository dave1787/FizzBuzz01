$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DivisibleByFive.feature");
formatter.feature({
  "id": "to-return-\"buzz\"-when-a-number-is-divisible-by-5",
  "tags": [
    {
      "name": "@tag",
      "line": 20
    }
  ],
  "description": "",
  "name": "To return \"BUZZ\" when a number is divisible by 5",
  "keyword": "Feature",
  "line": 21,
  "comments": [
    {
      "value": "#Author: your.email@your.domain.com",
      "line": 1
    },
    {
      "value": "#Keywords Summary :",
      "line": 2
    },
    {
      "value": "#Feature: List of scenarios.",
      "line": 3
    },
    {
      "value": "#Scenario: Business rule through list of steps with arguments.",
      "line": 4
    },
    {
      "value": "#Given: Some precondition step",
      "line": 5
    },
    {
      "value": "#When: Some key actions",
      "line": 6
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 7
    },
    {
      "value": "#And,But: To enumerate more Given,When,Then steps",
      "line": 8
    },
    {
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e",
      "line": 9
    },
    {
      "value": "#Examples: Container for s table",
      "line": 10
    },
    {
      "value": "#Background: List of steps run before each of the scenarios",
      "line": 11
    },
    {
      "value": "#\"\"\" (Doc Strings)",
      "line": 12
    },
    {
      "value": "#| (Data Tables)",
      "line": 13
    },
    {
      "value": "#@ (Tags/Labels):To group Scenarios",
      "line": 14
    },
    {
      "value": "#\u003c\u003e (placeholder)",
      "line": 15
    },
    {
      "value": "#\"\"",
      "line": 16
    },
    {
      "value": "## (Comments)",
      "line": 17
    },
    {
      "value": "#Sample Feature Definition Template",
      "line": 19
    }
  ]
});
formatter.scenario({
  "id": "to-return-\"buzz\"-when-a-number-is-divisible-by-5;to-check-that-if-a-number-divisible-by-5-is-entered,-\"buzz\"-is-displayed",
  "tags": [
    {
      "name": "@tag1",
      "line": 23
    }
  ],
  "description": "",
  "name": "To check that if a number divisible by 5 is entered, \"BUZZ\" is displayed",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "a number is input",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "the number is divisible by 5",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "it prints out \"BUZZ\"",
  "keyword": "Then ",
  "line": 27
});
formatter.match({
  "location": "DivisibleByThree.a_number_is_input()"
});
formatter.result({
  "duration": 135164000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 27
    }
  ],
  "location": "DivisibleByThree.the_number_is_divisible_by(int)"
});
formatter.result({
  "duration": 2367000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BUZZ",
      "offset": 15
    }
  ],
  "location": "DivisibleByThree.it_prints_out(String)"
});
formatter.result({
  "duration": 2761000,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: Does not calculate properly expected:\u003c[BUZZ]\u003e but was:\u003c[9]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.agileme.step_defs.DivisibleByThree.it_prints_out(DivisibleByThree.java:30)\n\tat ✽.Then it prints out \"BUZZ\"(DivisibleByFive.feature:27)\n"
});
formatter.uri("DivisibleByThree.feature");
formatter.feature({
  "id": "to-return-\"fizz\"-when-a-number-is-divisible-by-3",
  "tags": [
    {
      "name": "@tag",
      "line": 20
    }
  ],
  "description": "",
  "name": "To return \"FIZZ\" when a number is divisible by 3",
  "keyword": "Feature",
  "line": 21,
  "comments": [
    {
      "value": "#Author: your.email@your.domain.com",
      "line": 1
    },
    {
      "value": "#Keywords Summary :",
      "line": 2
    },
    {
      "value": "#Feature: List of scenarios.",
      "line": 3
    },
    {
      "value": "#Scenario: Business rule through list of steps with arguments.",
      "line": 4
    },
    {
      "value": "#Given: Some precondition step",
      "line": 5
    },
    {
      "value": "#When: Some key actions",
      "line": 6
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 7
    },
    {
      "value": "#And,But: To enumerate more Given,When,Then steps",
      "line": 8
    },
    {
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e",
      "line": 9
    },
    {
      "value": "#Examples: Container for s table",
      "line": 10
    },
    {
      "value": "#Background: List of steps run before each of the scenarios",
      "line": 11
    },
    {
      "value": "#\"\"\" (Doc Strings)",
      "line": 12
    },
    {
      "value": "#| (Data Tables)",
      "line": 13
    },
    {
      "value": "#@ (Tags/Labels):To group Scenarios",
      "line": 14
    },
    {
      "value": "#\u003c\u003e (placeholder)",
      "line": 15
    },
    {
      "value": "#\"\"",
      "line": 16
    },
    {
      "value": "## (Comments)",
      "line": 17
    },
    {
      "value": "#Sample Feature Definition Template",
      "line": 19
    }
  ]
});
formatter.scenario({
  "id": "to-return-\"fizz\"-when-a-number-is-divisible-by-3;to-check-that-if-a-number-divisible-by-3-is-entered,-\"fizz\"-is-displayed",
  "tags": [
    {
      "name": "@tag1",
      "line": 23
    }
  ],
  "description": "",
  "name": "To check that if a number divisible by 3 is entered, \"FIZZ\" is displayed",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "a number is input",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "the number is divisible by 3",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "it prints out \"FIZZ\"",
  "keyword": "Then ",
  "line": 27
});
formatter.match({
  "location": "DivisibleByThree.a_number_is_input()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "DivisibleByThree.the_number_is_divisible_by(int)"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FIZZ",
      "offset": 15
    }
  ],
  "location": "DivisibleByThree.it_prints_out(String)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
});