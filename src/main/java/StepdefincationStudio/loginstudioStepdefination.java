package StepdefincationStudio;

import java.io.IOException;

import org.testng.asserts.SoftAssert;

import com.cucumber.listener.Reporter;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kosmikpages.Allprojects;
import kosmikpages.loginkosmik;
import utils.ReportingManager;

public class loginstudioStepdefination extends loginkosmik
{
	Allprojects allp = new Allprojects();
	ReportingManager RM =new  ReportingManager();

	SoftAssert sa = new SoftAssert();
	
	@Given("^User is in login page$")
    public void user_is_in_login_page() throws IOException {
		launchApplication();
		Reporter.addStepLog("application Opened successfully");
		Reporter.addScreenCaptureFromPath(ReportingManager.captureScreenshot());
    }

    @When("^User enters email id \"([^\"]*)\"$")
    public void user_enters_email_id(String strArg1) throws IOException {
    	
    	
    	enterEmailId(strArg1);
    	
  
    	Reporter.addStepLog("User Entered Email ID sucessfully");
    	 Reporter.addScreenCaptureFromPath(ReportingManager.captureScreenshot());
    }

    @Then("^User should be logged in successfully$")
    public void user_should_be_logged_in_successfully() throws IOException {
        
    	String actual = allp.captureMyProjectsText().trim();
    	String expected = "MY PROJECTS";
    	
    	sa.assertEquals(actual, expected);
    	sa.assertAll();
    	Reporter.addScreenCaptureFromPath(ReportingManager.captureScreenshot());
    }

    @And("^User enters password \"([^\"]*)\"$")
    public void user_enters_password(String strArg1) {
        enterPassword(strArg1);
    }

    @And("^User clicks the signin button$")
    public void user_clicks_the_signin_button() {
        clickSigninButton();
    }
    
    @When("^User clicks the profile button$")
    public void user_clicks_the_profile_button() throws InterruptedException, IOException  {
    	Thread.sleep(3000);
    	allp.clickProfileButton();
		Reporter.addScreenCaptureFromPath(ReportingManager.captureScreenshot());
    }

    @Then("^User should be logged out successfully$")
    public void user_should_be_logged_out_successfully()  {
    	
    	boolean actual = allp.welcomeBackPresence();
    	boolean expected = true;
    	
    	sa.assertEquals(actual, expected);
      
    }

    @And("^User clicks the signout button$")
    public void user_clicks_the_signout_button()  {
    	allp.clickSignOutButton();
    }
    
    @Then("^User should see error message on the screen$")
    public void user_should_see_error_message_on_the_screen()  {
        
    	String actual = captureErrorMessage().trim();
    	String expected = "Invalid email or password.";
    	
    	
    	sa.assertEquals(actual, expected);
    	sa.assertAll();
    	
    	
    	
    }

	
}
