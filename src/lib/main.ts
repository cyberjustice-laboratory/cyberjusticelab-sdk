import { AxiosHttpClient } from "./axiosClient";
export { axiosFromApi } from "./axiosClient";
import { CyberjusticeAPIs } from "./cyberjusticeAPIs";

export class CyberjusticeAPI extends CyberjusticeAPIs {
  constructor(token: string) {
    super({
      httpClient: new AxiosHttpClient(token)
    });
  }
}
