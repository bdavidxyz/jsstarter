describe("External libs", function () {
  it("should have versions", function () {
    expect($).toBeDefined();
    expect(_).toBeDefined();
    expect(Big).toBeDefined();
    expect(Big.version).toEqual('4.0.2');
    expect(moment.version).toEqual('2.18.1');
    expect(_.VERSION).toEqual('4.17.5');
    expect($.fn.jquery).toEqual('2.2.4');
  })
})
