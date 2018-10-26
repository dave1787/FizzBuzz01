package com.agileme.FizzBuzzCalculator2;

public class FizzBuzzCalculator {

	public static void main(String[] args) {
		
		 Calculator _calc = new Calculator();
		 
		 _calc.setDenominator(3);
		 _calc.setNumerator(9);
		 
		 System.out.println(_calc.calculate());
	}
}
