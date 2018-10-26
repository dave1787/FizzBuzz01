#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios 
#<> (placeholder)
#""
## (Comments)

#Sample Feature Definition Template
@tag
Feature: As a user of calculators I want a calculator that returns "Fizz" when the number I enter is divisible by 3 so that I can test my division skills

@tag1
Scenario: To check that when a number divisible by 3 is entered, "Fizz" is returned
Given I have a calculator instance ready
When I enter 9
And the number is divisible by 3
Then the calculator returns "Fizz"