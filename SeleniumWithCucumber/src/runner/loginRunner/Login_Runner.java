/**
 * 
 */
package runner.loginRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
/**
 * @author Rajkumar Agrawal
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(features = "featurefile/login/loginTest.feature", glue = {
		"stepDefinitions.loginStepDefinition"}, plugin = {"html:target/cucumber-html-report"})
public class Login_Runner {

}
