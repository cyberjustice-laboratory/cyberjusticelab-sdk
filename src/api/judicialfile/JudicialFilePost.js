// Imports base class
import JudicialFile from './JudicialFile';

// Imports objects
import judicialFileApiRequest from './objects/judicialFileApiRequest';
import judicialFileApiResponse from './objects/judicialFileApiResponse';

/**
 * Judicial File: POST API.
 * 
 * @export
 * @class JudicialFilePost
 * @extends {JudicialFile}
 */
export default class JudicialFilePost extends JudicialFile {

    /**
     * Creates an instance of JudicialFilePost.
     * @memberof JudicialFilePost
     */
    constructor() {
        super();
    }

    /**
     * Gets a files list.
     * 
     * @param {judicialFileApiRequest} request
     * @return {judicialFileApiResponse} response
     * @memberof JudicialFilePost
     */
    async GetFiles(request) {
        let result = await this.requestHelper.post({
            url: 'https://localhost:441/JudicialFile/POST/Files',
            data: request
        });

        return Object.assign({}, result, judicialFileApiResponse);
    }
}