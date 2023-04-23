import { PocketAction, PocketAddItemOptions, PocketGetOptions } from "./interfaces/requests.js";
import { PocketActionResponse, PocketAddItemResponse, PocketRetrieveResponse } from "./interfaces/responses.js";
export default class PocketSDK {
    private consumerKey;
    constructor(consumerKey: string);
    addItem(accessToken: string, options: PocketAddItemOptions): Promise<PocketAddItemResponse>;
    sendActions(accessToken: string, actions: PocketAction[]): Promise<PocketActionResponse>;
    getItems(accessToken: string, options: PocketGetOptions): Promise<PocketRetrieveResponse>;
    private buildGetParams;
    private buildActionParams;
    private buildAddItemParams;
    private buildSearchParams;
    private sendRequest;
    private handleResponseStatus;
}
