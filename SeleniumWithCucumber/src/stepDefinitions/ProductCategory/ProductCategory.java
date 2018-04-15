/**
 * 
 */
package stepDefinitions.ProductCategory;

import org.apache.log4j.Logger;
//import org.testng.Assert;
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
	HomePage homepage;
	ProductCategoryPage productCategoryPage;
	
	@Given("^user click on women navigation menu$")
	public void user_click_on_women_navigation_menu() throws Throwable {
	   homepage = new HomePage(TestBase.driver);
	   log.info("clicking on women menu");
	   productCategoryPage = homepage.clickOnMenu(homepage.womenMenu);
	}

	@Then("^verify total number of women products dispalyed as \"([^\"]*)\"$")
	public void verify_total_number_of_women_products_dispalyed_as(String arg1) throws Throwable {
		int total = productCategoryPage.getTotalProducts();
		if(total == Integer.parseInt(arg1)){
			Assert.assertTrue(true, "given product count is matching with runtime product Data");	
		}
		else{
			log.info("actual product counts are : "+total);
			Assert.assertTrue(false, "given product count is not matching with runtime product Data");
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
			Assert.assertTrue(true, "given product count is matching with runtime product Data based on color filter");	
		}
		else{
			log.info("actual product counts are : "+total);
			Assert.assertTrue(false, "given product count is not matching with runtime product Data based on color filter");
		}
	}

}
