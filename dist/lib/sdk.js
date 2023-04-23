import { processErrorResponse } from "./errors/processErrorResponse.js";
import { processRateLimitError } from "./errors/processRateLimitError.js";
export default class PocketSDK {
    constructor(consumerKey) {
        this.consumerKey = consumerKey;
    }
    async addItem(accessToken, options) {
        const endpoint = "https://getpocket.com/v3/add";
        const params = this.buildAddItemParams(accessToken, options);
        const searchParams = this.buildSearchParams(params);
        const response = await this.sendRequest(endpoint, searchParams);
        this.handleResponseStatus(response);
        return await response.json();
    }
    async sendActions(accessToken, actions) {
        const endpoint = "https://getpocket.com/v3/send";
        const params = this.buildActionParams(accessToken, actions);
        const searchParams = this.buildSearchParams(params);
        const response = await this.sendRequest(endpoint, searchParams);
        this.handleResponseStatus(response);
        return await response.json();
    }
    async getItems(accessToken, options) {
        const endpoint = "https://getpocket.com/v3/get";
        const params = this.buildGetParams(accessToken, options);
        const searchParams = new URLSearchParams(params).toString();
        const response = await this.sendRequest(endpoint, searchParams);
        this.handleResponseStatus(response);
        return await response.json();
    }
    buildGetParams(accessToken, options) {
        return Object.assign(Object.assign({}, options), { consumer_key: this.consumerKey, access_token: accessToken });
    }
    buildActionParams(accessToken, actions) {
        return {
            actions: JSON.stringify(actions),
            consumer_key: this.consumerKey,
            access_token: accessToken,
        };
    }
    buildAddItemParams(accessToken, options) {
        return Object.assign(Object.assign({}, options), { consumer_key: this.consumerKey, access_token: accessToken });
    }
    buildSearchParams(params) {
        return new URLSearchParams(params).toString();
    }
    async sendRequest(endpoint, searchParams) {
        return await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: searchParams,
        });
    }
    handleResponseStatus(response) {
        if (response.status === 429) {
            const rateLimitInfo = processRateLimitError(response);
            console.warn("Rate limit exceeded:", rateLimitInfo);
            throw new Error(`Rate limit exceeded. User calls remaining: ${rateLimitInfo.userRemaining}, consumer key calls remaining: ${rateLimitInfo.keyRemaining}`);
        }
        else if (response.status !== 200) {
            const errorInfo = processErrorResponse(response);
            switch (errorInfo.status) {
                case 400:
                    console.warn("Invalid request:", errorInfo.errorMessage);
                    break;
                case 401:
                    console.warn("Authentication problem:", errorInfo.errorMessage);
                    break;
                case 403:
                    console.warn("Access denied:", errorInfo.errorMessage);
                    break;
                case 503:
                    console.warn("Pocket sync server down:", errorInfo.errorMessage);
                    break;
                default:
                    console.warn("Unknown error:", errorInfo.errorMessage);
            }
            throw new Error(`Error: ${errorInfo.errorMessage} (Code: ${errorInfo.errorCode})`);
        }
    }
}
//# sourceMappingURL=sdk.js.map