import * as tslib_1 from "tslib";
import { AxiosHttpClient } from "./axiosClient";
export { axiosFromApi } from "./axiosClient";
import { CyberjusticeAPIs } from "./cyberjusticeAPIs";
var CyberjusticeAPI = /** @class */ (function (_super) {
    tslib_1.__extends(CyberjusticeAPI, _super);
    function CyberjusticeAPI(token) {
        return _super.call(this, {
            httpClient: new AxiosHttpClient(token)
        }) || this;
    }
    return CyberjusticeAPI;
}(CyberjusticeAPIs));
export { CyberjusticeAPI };
//# sourceMappingURL=main.js.map