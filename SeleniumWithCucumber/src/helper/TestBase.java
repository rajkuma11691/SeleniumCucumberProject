/**
 * 
 */
package helper;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



/**
 * @author Rajkumar Agrawal
 *
 */
public class TestBase {
	WebDriver driver;
	private final Logger log = Logger.getLogger(TestBase.class);
	
	public TestBase(WebDriver driver) {
		this.driver = driver;
		
	}
	
	public void launchedAndNavigateBrowser() throws Exception {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+ "/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php?");
		Thread.sleep(3000);
		log.info("User is navigated and open the browser");
	}

}
