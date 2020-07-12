package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class smokeTest {
	
	WebDriver driver;
		
		@Given("^Open Chrome and start applicaiton$")
				public void Open_Chrome_and_start_applicaiton() throws Throwable {
					System.out.println("maven test weekend batch");
//					System.setProperty("webdriver.chrome.driver", "E:\\World Of Program\\weekendMaven\\chromedriver76\\chromedriver.exe");
//					driver = new ChromeDriver();				
//					driver.get("https://www.facebook.com/");
					
					
//					System.setProperty("webdriver.chrome.driver","C:\\Users\\lenovo\\Desktop\\August Weekend\\jar\\chromedriver76.exe");
//					WebDriver driver = new ChromeDriver();
//					driver.get("https://www.facebook.com/");
//					driver.manage().window().maximize();
//					
					System.setProperty("webdriver.chrome.driver", "C:\\Users\\lenovo\\Desktop\\Current Batch\\Batch Data\\jar\\chrome 84\\chromedriver.exe");
					driver = new ChromeDriver();
					driver.get("https://www.facebook.com/");
					driver.manage().window().maximize();
					System.out.println("change in script");
		    
		}
		
		//@When("^I enter username and password$")
		//public void I_enter_username_and_password() throws Throwable {
	
//		@When("^I enter \"([^\"]*)\" and password$")
//		public void I_enter_and_password(String uname) throws Throwable {
//				   
//					driver.findElement(By.xpath("//input[@name='email']")).sendKeys(uname);
//				//	System.out.println("enter username done");
//		  
//		}
		
		@When("I enter {string} and password")
		public void i_enter_and_password(String uname) {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println(uname);
			String name = uname;
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(name);
			
			//driver.findElement(By.xpath("//input[@name='email']")).sendKeys(uname);
			
		}
		
		@Then("^User should be login successfully$")
				public void User_should_be_login_successfully() throws Throwable {
				   
				  System.out.println("yes zal login");
		}



}
