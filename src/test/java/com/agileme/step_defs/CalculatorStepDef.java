package com.agileme.step_defs;

import static org.junit.Assert.assertEquals;

import com.agileme.FizzBuzzCalculator2.Calculator;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class CalculatorStepDef {
	Calculator _calc;
	
	@Given("^I have a calculator instance ready$")
	public void i_have_a_calculator_instance_ready() throws Throwable {

		_calc = new Calculator();
	}
		
	@When("^I enter (\\d+)$")
	public void i_enter(int arg1) throws Throwable {
    
		_calc.setNumerator(arg1);
	}
	
	@When("^the number is divisible by (\\d+)$")
	public void the_number_is_divisible_by(int arg1) throws Throwable {
		_calc.setDenominator(arg1);
	}

	@Then("^the calculator returns \"([^\"]*)\"$")
	public void the_calculator_returns(String arg1) throws Throwable {
		
		assertEquals("Does not calculate properly", arg1, _calc.calculate());
	}
}

