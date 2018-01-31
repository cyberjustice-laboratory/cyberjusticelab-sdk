// Init
import ES6Promise, { Promise } from 'es6-promise';
const MY_ES6PROMISE = ES6Promise.polyfill();
import 'isomorphic-fetch';

export const REQUEST_OPTIONS = {
    url: null,
    data: {}
};

// Private accessors
const _processResponse = Symbol('processResponse');

/**
 * Request wrapper helper.
 * 
 * @export
 * @class RequestHelper
 */
export default class RequestHelper {

    /**
     * Creates an instance of RequestHelper.
     * @memberof RequestHelper
     */
    constructor() {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }

    /**
     * GET wrapper.
     * 
     * @param {REQUEST_OPTIONS} opts 
     * @returns {any} 
     * @memberof RequestHelper
     */
    async get(opts) {
        try {
            let response = await fetch(opts.url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts.data)
            });

            return this[_processResponse](response);
        }
        catch (err) {
            return err;
        }
    }

    /**
     * POST wrapper.
     * 
     * @param {REQUEST_OPTIONS} opts 
     * @returns {any} 
     * @memberof RequestHelper
     */
    async post(opts) {
        try {
            let response = await fetch(opts.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts.data)
            });

            return this[_processResponse](response);
        }
        catch (err) {
            return err;
        }
    }

    /**
     * PUT wrapper.
     * 
     * @param {REQUEST_OPTIONS} opts 
     * @returns {any} 
     * @memberof RequestHelper
     */
    async put(opts) {
        try {
            let response = await fetch(opts.url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts.data)
            });

            return this[_processResponse](response);
        }
        catch (err) {
            return err;
        }
    }

    /**
     * PATCH wrapper.
     * 
     * @param {REQUEST_OPTIONS} opts 
     * @returns {any} 
     * @memberof RequestHelper
     */
    async patch(opts) {
        try {
            let response = await fetch(opts.url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts.data)
            });

            return this[_processResponse](response);
        }
        catch (err) {
            return err;
        }
    }

    /**
     * DELETE wrapper.
     * 
     * @param {REQUEST_OPTIONS} opts 
     * @returns {any} 
     * @memberof RequestHelper
     */
    async delete(opts) {
        try {
            let response = await fetch(opts.url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts.data)
            });

            return this[_processResponse](response);
        }
        catch (err) {
            return err;
        }
    }

    // Private functions

    /**
     * Processes an HTTP response.
     * 
     * @param {any} response 
     * @memberof RequestHelper
     */
    [_processResponse](response) {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
}