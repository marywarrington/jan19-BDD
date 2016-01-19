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
  it("is true for a year this is divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
  it("is false for any non-numerical input", function() {
    expect(leapYear(NaN)).to.equal(false);
  });
});
