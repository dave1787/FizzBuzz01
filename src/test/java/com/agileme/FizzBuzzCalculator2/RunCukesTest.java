package com.agileme.FizzBuzzCalculator2;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
		features={"src/test/features/"},
		glue={"com.agileme.step_defs"},
		monochrome=true)
public class RunCukesTest {
}
