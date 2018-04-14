package runner.refistrationRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "featurefile/registration/RegistrationTest.feature" }, glue = {
		"stepDefinitions.registrationStepDefinition" })//, plugin = {"html:target/cucumber-html-report"})
public class Registration_Runner {

}
