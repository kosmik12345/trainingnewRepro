package fortraining.pageobjects;

import org.openqa.selenium.By;

import fortraining.base.base;

public class loginpage extends base {
	
	public static By emailInputBox = By.id("user_email");
	public static By passwordInputBox = By.id("user_password");
	public static By signinButton = By.name("commit");
	public static By invalidErrorMessage = By.xpath("//p[text()='Invalid email or password.']");
	
	public static void enterEmailId(String arg1) 
	{

		driver.findElement(emailInputBox).sendKeys(arg1);

	}
	public static void enterPassword(String arg1)
	{

		driver.findElement(passwordInputBox).sendKeys(arg1);
	}

	public static void clickSigninButton() {

		driver.findElement(signinButton).click();
	}

	
	public static String captureErrorMessage() {

		String s = "";

		s = driver.findElement(invalidErrorMessage).getText();

		return s;

	}
	
}

