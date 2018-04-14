/**
 * 
 */
package stepDefinitions.loginStepDefinition;

/**
 * @author Rajkumar Agrawal
 *
 */
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObject.Login_Page;

public class Step_LoginToApplication{
	private final Logger log = Logger.getLogger(Step_LoginToApplication.class);

	WebDriver driver;
	Login_Page loginpage;
	
     @Given("^navigate to application$")
	 public void navigate_to_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+ "/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php?");
		Thread.sleep(3000);
		log.info("User is navigated and open the browser");
	}
	@When("^user click on sign in link$")
	public void user_click_on_sign_in_link() throws Throwable {
		loginpage= new Login_Page(driver);
		loginpage.clickOnSignInLink();
		Thread.sleep(3000);
	}
	@When("^enter email address as \"([^\"]*)\"$")
	public void enter_email_address_as(String arg1) throws Throwable {
		loginpage.enterEmailAddress(arg1);
	}
	@When("^enter password as \"([^\"]*)\"$")
	public void enter_password_as(String arg1) throws Throwable {
		loginpage.enterPassword(arg1);
	}
	@When("^click on sign in button$")
	public void click_on_sign_in_button() throws Throwable {
		loginpage.clickOnSubmitButton();
	}
	@Then("^Login is successful$")
	public void login_is_successful() throws Throwable {
		loginpage.verifySuccessLoginMsg();
	}
}
