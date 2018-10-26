package com.agileme.FizzBuzzCalculator2;

public class Calculator {
	
	int _numerator;
	int _denominator;
	
	public String calculate(){
		 
		if(_numerator % _denominator  == 0){
			return "Fizz";
		}else{
			return String.valueOf(_numerator);
		}
	}
	
	public void setNumerator(int numerator){
		
		_numerator = numerator;
	}
	
	public void setDenominator(int denominator){
		
		_denominator = denominator;
	}

}
