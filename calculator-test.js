it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 5000,
    years: 5,
    rate: 4.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('92.08');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 5,
    rate: 4.0
  };
  expect(calculateMonthlyPayment(values)).toEqual('92.08');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 65000,
    years: 10,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('5362.90');
});