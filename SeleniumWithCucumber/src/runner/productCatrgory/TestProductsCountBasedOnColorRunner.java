package runner.productCatrgory;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "featurefile/productCategory1/TestProductsCountBasedOnColor.feature", glue = {
		"classpath:com.cucumber.framework.stepdefinition"}, plugin = {"html:target/cucumber-html-report"})
public class TestProductsCountBasedOnColorRunner {

}
