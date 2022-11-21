const assert = require('chai').assert;
const tail = require('../tail');


describe("middle", () => {
  it("returns lighthouse, labs for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

