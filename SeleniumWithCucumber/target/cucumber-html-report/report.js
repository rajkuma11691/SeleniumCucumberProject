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
  "name": "navigate to application",
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
  "name": "verify total number of products dispalyed as \"3\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});