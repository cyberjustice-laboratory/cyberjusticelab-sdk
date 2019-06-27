import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { CyberjusticeAPIsContext } from "./cyberjusticeAPIsContext";
declare class CyberjusticeAPIs extends CyberjusticeAPIsContext {
    async: operations.Async;
    businessInformation: operations.BusinessInformation;
    calendar: operations.Calendar;
    document: operations.Document;
    exchange: operations.Exchange;
    form: operations.Form;
    hearing: operations.Hearing;
    journal: operations.Journal;
    judicialEntity: operations.JudicialEntity;
    judicialFile: operations.JudicialFile;
    location: operations.Location;
    lookup: operations.Lookup;
    prosecutingAuthority: operations.ProsecutingAuthority;
    request: operations.Request;
    secureMail: operations.SecureMail;
    security: operations.Security;
    tag: operations.Tag;
    uProfile: operations.UProfile;
    user: operations.User;
    witness: operations.Witness;
    /**
     * Initializes a new instance of the CyberjusticeAPIs class.
     * @param [options] The parameter options
     */
    constructor(options?: Models.CyberjusticeAPIsOptions);
}
export { CyberjusticeAPIs, CyberjusticeAPIsContext, Models as CyberjusticeAPIsModels, Mappers as CyberjusticeAPIsMappers };
export * from "./operations";
//# sourceMappingURL=cyberjusticeAPIs.d.ts.map