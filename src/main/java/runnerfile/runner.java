package runnerfile;


import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"feature/log.feature"},
                 glue =     {"fortrainingsetpdefinitions"},
                 plugin =    { "pretty","html:target/cucumber-reports","json:target/cucumber-reports/Cucumber.json",
    		     "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/extentreport.html"},
                 tags=     "@smoke",
                 monochrome = true )
public class runner extends AbstractTestNGCucumberTests{
	
	@AfterClass
	  public static void setup() {
  
      Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	  Reporter.setSystemInfo("User Name", "Mahesh");
	  Reporter.setSystemInfo("Application Name", "W3C");
	  Reporter.setSystemInfo("Operating System Type", "Windows 10");
	  Reporter.setSystemInfo("Environment", "UAT");
	  Reporter.setTestRunnerOutput("Test Execution Cucumber Report"); 
	 
	 
}

}
