@tag
Feature: Test Facebook
  I want to use this template for my feature file

  @tag1
  Scenario Outline: Test login with cred
		Given Open Chrome and start applicaiton
		When I enter "<Username>" and password
		Then User should be login successfully
		
Examples:
| Username |
| Abhijeet | 
| vishal | 
| Jayanta |