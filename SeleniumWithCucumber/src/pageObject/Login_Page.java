/**
 * 
 */
package pageObject;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import helper.WaitHelper;
/**
 * @author Rajkumar Agrawal
 *
 */

public class Login_Page{
	
	WebDriver driver;
	private final Logger log = Logger.getLogger(Login_Page.class);
	WaitHelper waitHelper;
	
	@FindBy(xpath="//*[@id='header']/div[2]/div/div/nav/div[1]/a")
	WebElement signin;
	
	@FindBy(xpath="//*[@id='email']")
	WebElement emailAddress;
	
	@FindBy(xpath="//*[@id='passwd']")
	WebElement password;
	
	@FindBy(xpath="//*[@id='SubmitLogin']")
	WebElement submitLogin;
	
	@FindBy(xpath="//*[@id='center_column']/p")
	WebElement successMsgObject;
	
	public Login_Page(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
		waitHelper.waitForElement(driver, signin,20);

	}
	
	public void clickOnSignInLink(){
		log.info("clicked on sign in link...");
		signin.click();
	}
	
	public void enterEmailAddress(String emailAddress){
		log.info("entering email address...."+emailAddress);
		this.emailAddress.sendKeys(emailAddress);
	}
	
	public void enterPassword(String password){
		log.info("entering password...."+password);
		this.password.sendKeys(password);
	}
	
	public HomePage clickOnSubmitButton(){
		log.info("clicking on submit button...");
		waitHelper.waitForElement(driver, submitLogin,20);
		submitLogin.click();
		return new HomePage(driver);
	}
	
	public void verifySuccessLoginMsg(){
		System.out.println("User logged in successfully");
	}
}
