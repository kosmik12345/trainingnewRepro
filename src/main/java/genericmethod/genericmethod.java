package genericmethod;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import fortraining.base.base;

public class genericmethod {
	
	public static String captureScreenshot() throws IOException {
		
		String screenshotPath = "";
		
		TakesScreenshot scrShot = (TakesScreenshot) base.driver;
		//2. store the file in soruce file
		File sourceFile = scrShot.getScreenshotAs(OutputType.FILE);
		File destinationPath = new File("D://screenprint//"
					+ "ScreenCapture" + System.currentTimeMillis() + ".png");	
		FileUtils.copyFile(sourceFile, destinationPath);
		//5. capturing the destinationpath in string
				screenshotPath = destinationPath.getAbsolutePath();

				return screenshotPath;
		
	}
	}
	
	
	
	
