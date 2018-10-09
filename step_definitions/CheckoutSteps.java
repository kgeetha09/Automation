package step_definitions;

import cucumber.api.java.en.*;



import cucumber.api.PendingException;
import implementation.Checkout;
import static org.junit.Assert.*;
public class CheckoutSteps
{
	int bananprice=0;
	
	
	Checkout checkout=new Checkout();
	
	
@Given("^the price of a \"([^\"]*)\" is (\\d+)cents$")
public void thePriceOfAIsCents(String arg1, int arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	bananprice=arg2;
	
	}

@When("^I checkout (\\d+) \"([^\"]*)\"$")
public void iCheckout(int arg1, String arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    //throw new PendingException();
	
	checkout.add(arg2,arg1);
}

@Then("^the total price should be (\\d+)cents$")
public void theTotalPriceShouldBeCents(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   assertEquals(arg1,checkout.total());
}
}