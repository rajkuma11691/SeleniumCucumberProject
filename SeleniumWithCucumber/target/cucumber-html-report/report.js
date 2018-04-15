$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featurefile/productCategory1/TestProductsCountBasedOnColor.feature");
formatter.feature({
  "line": 2,
  "name": "ProductCategoryPage1",
  "description": "",
  "id": "productcategorypage1",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Verify Total Number Of Products based on color filters",
  "description": "",
  "id": "productcategorypage1;verify-total-number-of-products-based-on-color-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "navigate to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click on women navigation menu",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on orange color filter",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "verify total number of products dispalyed as \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductCategory.navigate_to_the_application()"
});
formatter.result({
  "duration": 148412594541,
  "status": "passed"
});
formatter.match({
  "location": "ProductCategory.user_click_on_women_navigation_menu()"
});
formatter.result({
  "duration": 23807449615,
  "status": "passed"
});
formatter.match({
  "location": "ProductCategory.click_on_orange_color_filter()"
});
formatter.result({
  "duration": 7592100295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 46
    }
  ],
  "location": "ProductCategory.verify_total_number_of_products_dispalyed_as(String)"
});
formatter.result({
  "duration": 171040897,
  "error_message": "java.lang.AssertionError: given product count is not matching with runtime product Data based on color filter\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepDefinitions.ProductCategory.ProductCategory.verify_total_number_of_products_dispalyed_as(ProductCategory.java:72)\r\n\tat ✽.Then verify total number of products dispalyed as \"2\"(featurefile/productCategory1/TestProductsCountBasedOnColor.feature:8)\r\n",
  "status": "failed"
});
});