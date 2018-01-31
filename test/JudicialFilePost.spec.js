var expect = require('chai').expect;
import JudicialFilePost from '../src/api/judicialfile/JudicialFilePost';
let judicialFilePost = new JudicialFilePost();

describe('JudicialFile POST API: GetFiles', function() {
    it('should convert single digits', function() {
        var result = judicialFilePost.GetFiles();
        expect(result).to.equal('1');
    });
});