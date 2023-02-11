package fortraining.base;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class base {
	
	public static WebDriver driver;
	
	public static void launchApplication() {
		//WebDriver driver;-it should used another class So i decide globally
		WebDriverManager.chromedriver().setup();
		//WebDriverManager.iedriver().setup();
		 driver = new ChromeDriver();
		 driver.get("https://studio.cucumber.io/users/sign_in");
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(3));	 
		 
	}
	
	public static void closeApplication() {
		
		driver.close();
	}
}


