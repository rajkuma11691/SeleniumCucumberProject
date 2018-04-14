/**
 * 
 */
package stepDefinitions.registrationStepDefinition;

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
import pageObject.RegistrationPage;

public class Step_Registration {
	
	private final Logger log = Logger.getLogger(Step_Registration.class);
	WebDriver driver;
	RegistrationPage registrationPage;
	Login_Page loginpage;
	
	@Given("^open browser navigate to application$")
	public void open_browser_navigate_to_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+ "/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php?");
		Thread.sleep(3000);
		log.info("User is navigated and open the browser");
	}
	@When("^click on signin link$")
	public void click_on_signin_link() throws Throwable { 
		registrationPage = new RegistrationPage(driver);
		registrationPage.clickOnSignInLink();
		Thread.sleep(2000);
	}
	
	@When("^enter registration \"(.*?)\"$")
	public void enter_registration(String arg1) throws Throwable {
		registrationPage.enterRegistrationEmail(arg1);
		Thread.sleep(3000);
	}

	@When("^click on create an account$")
	public void click_on_create_an_account() throws Throwable {
		registrationPage.clickOnCreateAnAccount();
		Thread.sleep(3000);
	}

	@Then("^registration firm open$")
	public void registration_firm_open() throws Throwable {
		System.out.println("Registration form opned successfully");
		//new GenericHelper().isDisplayed(registrationPage.mrRadioButton);
	}

	@Then("^select mr radion button$")
	public void select_mr_radion_button() throws Throwable {
		registrationPage.setMrRadioButton();
	}

	@Given("^enter first Name \"([^\"]*)\"$")
	public void enter_first_Name(String arg1) throws Throwable {
		registrationPage.setFirstName(arg1);
	}

	@Given("^enter last Name \"([^\"]*)\"$")
	public void enter_last_Name(String arg1) throws Throwable {
		registrationPage.setLastname(arg1);
	}

	@Given("^enter password  \"([^\"]*)\"$")
	public void enter_password(String arg1) throws Throwable {
		registrationPage.setPassword(arg1);
	}

	@Given("^select day \"([^\"]*)\"$")
	public void select_day(String arg1) throws Throwable {
		registrationPage.setDay(arg1);
	}

	@Given("^select month \"([^\"]*)\"$")
	public void select_month(String arg1) throws Throwable {
		registrationPage.setMonth(arg1);
	}

	@Given("^select year \"([^\"]*)\"$")
	public void select_year(String arg1) throws Throwable {
		registrationPage.setYear(arg1);
	}

	@Given("^enter your address first Name \"([^\"]*)\"$")
	public void enter_your_address_first_Name(String arg1) throws Throwable {
		registrationPage.setYourAddressFirstName(arg1);
	}

	@Given("^enter your address last Name \"([^\"]*)\"$")
	public void enter_your_address_last_Name(String arg1) throws Throwable {
		registrationPage.setYourAddressLastName(arg1);
	}

	@Given("^enter your company Name \"([^\"]*)\"$")
	public void enter_your_company_Name(String arg1) throws Throwable {
		registrationPage.setYourAddressCompany(arg1);
	}

	@Given("^enter Address \"([^\"]*)\"$")
	public void enter_Address(String arg1) throws Throwable {
		registrationPage.setAddress(arg1);
	}

	@Given("^enter Address city \"([^\"]*)\"$")
	public void enter_Address_city(String arg1) throws Throwable {
		registrationPage.setYourAddressCity(arg1);
	}

	@Given("^select state \"([^\"]*)\"$")
	public void select_state(String arg1) throws Throwable {
		registrationPage.setYourAddressState(arg1);
	}

	@Given("^select zipcode \"([^\"]*)\"$")
	public void select_zipcode(String arg1) throws Throwable {
		registrationPage.setYourAddressPostCode(arg1);
	}

	@Given("^Select mobile phone nymber \"([^\"]*)\"$")
	public void select_mobile_phone_nymber(String arg1) throws Throwable {
		registrationPage.setMobilePhone(arg1);
	}

	@Given("^Assign an address alias \"([^\"]*)\"$")
	public void assign_an_address_alias(String arg1) throws Throwable {
		registrationPage.setAddressAlias(arg1);
	}
	
	@Given("^click on registration button$")
	public void click_on_registration_button() throws Throwable {
		registrationPage.clickRegistration();
	}

	@Then("^verify Registration success message$")
	public void verify_Registration_success_message() throws Throwable {
		System.out.println("Registration done successfully");
		Thread.sleep(8000);
	}


	
}
