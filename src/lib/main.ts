import { AxiosHttpClient } from "./axiosClient";
import { CyberjusticeAPIs } from "./cyberjusticeAPIs";

export class CyberjusticeAPI extends CyberjusticeAPIs {
  constructor(token: string) {
    super({
      httpClient: new AxiosHttpClient(token)
    });
  }
}
