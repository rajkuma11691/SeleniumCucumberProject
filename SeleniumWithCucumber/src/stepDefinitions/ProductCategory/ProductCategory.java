/**
 * 
 */
package stepDefinitions.ProductCategory;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pageObject.HomePage;
import pageObject.ProductCategoryPage;
/**
 * @author Rajkumar Agrawal
 *
 */
public class ProductCategory {
	private final Logger log = Logger.getLogger(ProductCategory.class);
	WebDriver driver;
	HomePage homepage;
	ProductCategoryPage productCategoryPage;
	
	@Given("^navigate to the application$")
	public void navigate_to_the_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+ "/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://automationpractice.com/index.php?");
		Thread.sleep(3000);
		log.info("User is navigated and open the browser");
	}
	
	@Given("^user click on women navigation menu$")
	public void user_click_on_women_navigation_menu() throws Throwable {
	   homepage = new HomePage(driver);
	   log.info("clicking on women menu");
	   productCategoryPage = homepage.clickOnMenu(homepage.womenMenu);
	}

	@Then("^verify total number of women products dispalyed as \"([^\"]*)\"$")
	public void verify_total_number_of_women_products_dispalyed_as(String arg1) throws Throwable {
		int total = productCategoryPage.getTotalProducts();
		if(total == Integer.parseInt(arg1)){
			//Assert.assertTrue(true, "given product count is matching with runtime product Data");	
			Assert.assertTrue("given product count is matching with runtime product Data", true);
		}
		else{
			log.info("actual product counts are : "+total);
			//Assert.assertTrue(false, "given product count is not matching with runtime product Data");
			Assert.assertTrue("given product count is not matching with runtime product Data", false);
		}
	}
	
	@Given("^click on orange color filter$")
	public void click_on_orange_color_filter() throws Throwable {
		productCategoryPage.selectColor(productCategoryPage.Orange);
		log.info("we are selecting :"+productCategoryPage.Orange);
	}

	@Then("^verify total number of products dispalyed as \"([^\"]*)\"$")
	public void verify_total_number_of_products_dispalyed_as(String arg1) throws Throwable {
		int total = productCategoryPage.getTotalProducts();
		if(total == Integer.parseInt(arg1)){
			//Assert.assertTrue(true, "given product count is matching with runtime product Data based on color filter");	
			Assert.assertTrue("given product count is matching with runtime product Data based on color filter", true);
		}
		else{
			log.info("actual product counts are : "+total);
			//Assert.assertTrue(false, "given product count is not matching with runtime product Data based on color filter");
			Assert.assertTrue("given product count is not matching with runtime product Data based on color filter", false);
		}
	}

}
