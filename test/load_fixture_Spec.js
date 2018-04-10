describe("add", function() {

  beforeEach(function(){
    loadFixtures('timeline.html');
  });

  it("Should be able to read html", function() {
    expect($('#timeline').length).toEqual(1);
  });
});
