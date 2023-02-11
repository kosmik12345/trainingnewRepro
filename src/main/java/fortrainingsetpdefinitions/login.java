package fortrainingsetpdefinitions;

import java.io.IOException;

import org.testng.asserts.SoftAssert;

import com.cucumber.listener.Reporter;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import fortraining.base.base;
import fortraining.pageobjects.loginpage;
import genericmethod.genericmethod;

public class login  extends base{
	loginpage lp=new loginpage();
	genericmethod gm=new genericmethod(); 
	SoftAssert sa = new SoftAssert();
    @Given("^User is in login page$")
    public void user_is_in_login_page() throws Throwable 
    {
        
        launchApplication();
    
    	Reporter.addStepLog("Page is displayed successfully"); 
    	Reporter.addScreenCaptureFromPath(gm.captureScreenshot());
    }

    @When("^User enters email id (.+)$")
    public void user_enters_email_id(String username) throws Throwable {
       

    lp.enterEmailId(username);

 Reporter.addStepLog("email is entered");
 Reporter.addScreenCaptureFromPath(gm.captureScreenshot());
    }

    @And("^User enters password (.+)$")
    public void user_enters_password(String username) throws Throwable {
      

     lp.enterPassword(username);
     Reporter.addStepLog("password is entered");

    }

    @Then("^User should be logged in successfully$")
    public void user_should_be_logged_in_successfully() throws Throwable {
        
        
       
    }

   

    @And("^User clicks the signin button$")
    public void user_clicks_the_signin_button() throws Throwable {
    	lp.clickSigninButton();
    	 Reporter.addScreenCaptureFromPath(gm.captureScreenshot());
    	   Reporter.addStepLog("Sign in successfully.");
        
    }
    
    @Then("^User should be able to see the error message$")
    public void User_should_be_able_to_see_the_error_message() throws IOException  {
        
    	String actual = lp.captureErrorMessage().trim();
    	String expected = "Invalid email or";
    	
       sa.assertEquals(actual, expected);
     	sa.assertAll();
    }
    

}
