Feature:Checkout
    Scenario:Checkout a banana
    Given the price of a "banana" is 40cents
    When I checkout 1 "banana"
    Then the total price should be 40cents