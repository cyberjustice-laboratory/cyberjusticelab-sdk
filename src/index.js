// Apis
import judicialFileApi from "./api/judicialFile";

export default {
  judicialFileApi
};

const authBidon = {
  id: 0,
  claim: []
};

console.dir(judicialFileApi.post.getFile("lala")(authBidon));
