import { expect } from "chai";
import moxios from "moxios";
import RequestHelper from "../src/helpers/RequestHelper";

describe("Tests for RequestHelper class", () => {
  let requestHelper;

  beforeEach(() => {
    requestHelper = new RequestHelper({});
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // HTTP GET
  describe("Tests for get function", () => {
    it("Should throw error because of opts missing parameter", done => {
      requestHelper
        .get()
        .catch(error => {
          expect(error).to.not.be.null;
          expect(error).to.not.be.undefined;
          expect(error.message).to.equal("Missing opts parameter");
        })
        .then(done, done);
    });

    it("Should return 200 status code with valid object", done => {
      moxios.stubRequest("/url", {
        status: 200,
        response: { id: 1, name: "name" }
      });

      moxios.wait(() => {
        requestHelper
          .get({ url: "/url" })
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.data.id).to.equal(1);
            expect(result.data.name).to.equal("name");
          })
          .then(done, done);
      });
    });
    it("Should throw an error on call", done => {
      moxios.stubRequest("/url", {
        status: 404
      });

      moxios.wait(() => {
        requestHelper
          .get({ url: "/url" })
          .catch(error => {
            expect(error.message).to.equal("Error: Request failed with status code 404");
          })
          .then(done, done);
      });
    });
  });

  // HTTP POST
  describe("Tests for post function", () => {
    it("Should throw error because of opts missing parameter", done => {
      requestHelper
        .post()
        .catch(error => {
          expect(error).to.not.be.null;
          expect(error).to.not.be.undefined;
          expect(error.message).to.equal("Missing opts parameter");
        })
        .then(done, done);
    });

    it("Should return 200 status code with valid object", done => {
      moxios.stubRequest("/url", {
        status: 200,
        response: { id: 1, name: "name" }
      });

      moxios.wait(() => {
        requestHelper
          .post({ url: "/url" })
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.data.id).to.equal(1);
            expect(result.data.name).to.equal("name");
          })
          .then(done, done);
      });
    });
    it("Should throw an error on call", done => {
      moxios.stubRequest("/url", {
        status: 404
      });

      moxios.wait(() => {
        requestHelper
          .post({ url: "/url" })
          .then({})
          .catch(error => {
            expect(error.message).to.equal("Error: Request failed with status code 404");
          })
          .then(done, done);
      });
    });
  });

  // HTTP PUT
  describe("Tests for put function", () => {
    it("Should throw error because of opts missing parameter", done => {
      requestHelper
        .put()
        .catch(error => {
          expect(error).to.not.be.null;
          expect(error).to.not.be.undefined;
          expect(error.message).to.equal("Missing opts parameter");
        })
        .then(done, done);
    });

    it("Should return 200 status code with valid object", done => {
      moxios.stubRequest("/url", {
        status: 200,
        response: { id: 1, name: "name" }
      });

      moxios.wait(() => {
        requestHelper
          .put({ url: "/url" })
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.data.id).to.equal(1);
            expect(result.data.name).to.equal("name");
          })
          .then(done, done);
      });
    });
    it("Should throw an error on call", done => {
      moxios.stubRequest("/url", {
        status: 404
      });

      moxios.wait(() => {
        requestHelper
          .put({ url: "/url" })
          .then({})
          .catch(error => {
            expect(error.message).to.equal("Error: Request failed with status code 404");
          })
          .then(done, done);
      });
    });
  });

  // HTTP PATCH
  describe("Tests for post function", () => {
    it("Should throw error because of opts missing parameter", done => {
      requestHelper
        .patch()
        .catch(error => {
          expect(error).to.not.be.null;
          expect(error).to.not.be.undefined;
          expect(error.message).to.equal("Missing opts parameter");
        })
        .then(done, done);
    });

    it("Should return 200 status code with valid object", done => {
      moxios.stubRequest("/url", {
        status: 200,
        response: { id: 1, name: "name" }
      });

      moxios.wait(() => {
        requestHelper
          .patch({ url: "/url" })
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.data.id).to.equal(1);
            expect(result.data.name).to.equal("name");
          })
          .then(done, done);
      });
    });
    it("Should throw an error on call", done => {
      moxios.stubRequest("/url", {
        status: 404
      });

      moxios.wait(() => {
        requestHelper
          .patch({ url: "/url" })
          .then({})
          .catch(error => {
            expect(error.message).to.equal("Error: Request failed with status code 404");
          })
          .then(done, done);
      });
    });
  });

  // HTTP DELETE
  describe("Tests for put function", () => {
    it("Should throw error because of opts missing parameter", done => {
      requestHelper
        .delete()
        .catch(error => {
          expect(error).to.not.be.null;
          expect(error).to.not.be.undefined;
          expect(error.message).to.equal("Missing opts parameter");
        })
        .then(done, done);
    });

    it("Should return 200 status code with valid object", done => {
      moxios.stubRequest("/url", {
        status: 200,
        response: { id: 1, name: "name" }
      });

      moxios.wait(() => {
        requestHelper
          .delete({ url: "/url" })
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.data.id).to.equal(1);
            expect(result.data.name).to.equal("name");
          })
          .then(done, done);
      });
    });
    it("Should throw an error on call", done => {
      moxios.stubRequest("/url", {
        status: 404
      });

      moxios.wait(() => {
        requestHelper
          .delete({ url: "/url" })
          .then({})
          .catch(error => {
            expect(error.message).to.equal("Error: Request failed with status code 404");
          })
          .then(done, done);
      });
    });
  });
});
