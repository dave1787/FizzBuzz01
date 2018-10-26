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
Feature: As a user of calculators I want a calculator that returns "Buzz" when the number I enter is divisible by 5 so that I can test my division skills

@tag1
Scenario Outline: To check that when a numerator entered is divisible by 5 and "Buzz" is returned
Given I have a calculator instance ready
When I enter <numerator>
And the number is divisible by <denominator>
Then the calculator returns <output>

Examples:
    | numerator	| denominator	| output	|
    | 8 				|  5   				| "8"			|
    | 9 				|  3   				| "Fizz"	|
    | 10 				|  5   				| "Buzz"	|
