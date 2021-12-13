const SimpleStorage = artifacts.require("SimpleStorage");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts) {
  it("check accessibility", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });
});

contract("SimpleStorage", function (accounts) {
  it("Should respond to call", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });
});


contract("SimpleStorage", function (accounts) {
  it("should store right number", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });
});


contract("SimpleStorage", function (accounts) {
  it("should retrieve x", async function () {
    await SimpleStorage.deployed();
    return assert.isTrue(true);
  });
});

contract("SimpleStorage", (/* accounts */) => {
  describe("Initial deployment", async () => {
    it("should assert true", async function () {
      await SimpleStorage.deployed();
      assert.isTrue(true);
    });

    
    

  });
});