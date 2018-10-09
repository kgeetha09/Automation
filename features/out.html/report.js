$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkout.feature");
formatter.feature({
  "line": 1,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Checkout a banana",
  "description": "",
  "id": "checkout;checkout-a-banana",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "the price of a \"banana\" is 40cents",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I checkout 1 \"banana\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "the total price should be 40cents",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "banana",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "CheckoutSteps.thePriceOfAIsCents(String,int)"
});
formatter.result({
  "duration": 954030540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    },
    {
      "val": "banana",
      "offset": 14
    }
  ],
  "location": "CheckoutSteps.iCheckout(int,String)"
});
formatter.result({
  "duration": 306110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "CheckoutSteps.theTotalPriceShouldBeCents(int)"
});
formatter.result({
  "duration": 9853793,
  "error_message": "java.lang.AssertionError: expected:\u003c40\u003e but was:\u003c4\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat step_definitions.CheckoutSteps.theTotalPriceShouldBeCents(CheckoutSteps.java:37)\r\n\tat ✽.Then the total price should be 40cents(checkout.feature:5)\r\n",
  "status": "failed"
});
});