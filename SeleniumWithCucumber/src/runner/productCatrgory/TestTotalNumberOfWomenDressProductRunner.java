package runner.productCatrgory;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "featurefile/productCategory1/TestTotalNumberOfWomenDressProductRunner.feature", glue = {
		"stepDefinitions.ProductCategory" }, plugin = {"html:target/cucumber-html-report"})
public class TestTotalNumberOfWomenDressProductRunner {

}
