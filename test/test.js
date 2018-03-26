const assert = require("assert");
const sinon = require("sinon");
const axios = require("axios");
const RequestHelper = require("../src/helpers/RequestHelper");

describe("Tests for the RequestHelpers class with invalid authState", function() {
  let requestHelper;

  beforeEach(function() {
    requestHelper = new RequestHelper({});
  });

  describe("", function() {
    it("Should throw error because of opts missing parameter", function() {
      // var mockAxios = sinon.mock(axios);

      requestHelper.get().catch(error => {
        assert.equal(error, "Missing opts parameter");
      });

      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
