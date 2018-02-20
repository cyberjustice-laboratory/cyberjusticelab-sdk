import JudicialFilePost from './api/judicialfile/JudicialFilePost';

const JUDICIALFILE_POST = new JudicialFilePost();

async function test() {
    let result = await JUDICIALFILE_POST.GetFiles();
    console.log(result);
}

test(); 