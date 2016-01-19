describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100 or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });
  it("is true for a year that is divisible by 4", function() {
    expect(leapYear(1988)).to.equal(true);
  });
  it("is false for a year that is divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });
});
