import { processErrorResponse } from "./errors/processErrorResponse.js";
import { processRateLimitError } from "./errors/processRateLimitError.js";
import { PocketAction, PocketAddItemOptions, PocketGetOptions } from "./interfaces/requests.js";
import { PocketActionResponse, PocketAddItemResponse, PocketRetrieveResponse } from "./interfaces/responses.js";

export default class PocketSDK {
  private consumerKey: string;

  constructor(consumerKey: string) {
    this.consumerKey = consumerKey;
  }

  public async addItem(accessToken: string, options: PocketAddItemOptions): Promise<PocketAddItemResponse> {
    const endpoint = "https://getpocket.com/v3/add";
    const params = this.buildAddItemParams(accessToken, options);
    const searchParams = this.buildSearchParams(params);

    const response = await this.sendRequest(endpoint, searchParams);

    this.handleResponseStatus(response);

    return await response.json();
  }

  public async sendActions(accessToken: string, actions: PocketAction[]): Promise<PocketActionResponse> {
    const endpoint = "https://getpocket.com/v3/send";
    const params = this.buildActionParams(accessToken, actions);
    const searchParams = this.buildSearchParams(params);

    const response = await this.sendRequest(endpoint, searchParams);

    this.handleResponseStatus(response);

    return await response.json();
  }

  public async getItems(accessToken: string, options: PocketGetOptions): Promise<PocketRetrieveResponse> {
    const endpoint = "https://getpocket.com/v3/get";
    const params = this.buildGetParams(accessToken, options);
    const searchParams = new URLSearchParams(params as Record<string, string>).toString();

    const response = await this.sendRequest(endpoint, searchParams);

    this.handleResponseStatus(response);

    return await response.json();
  }

  private buildGetParams(accessToken: string, options: PocketGetOptions): object {
    return {
      ...options,
      consumer_key: this.consumerKey,
      access_token: accessToken,
    };
  }

  private buildActionParams(accessToken: string, actions: PocketAction[]): object {
    return {
      actions: JSON.stringify(actions),
      consumer_key: this.consumerKey,
      access_token: accessToken,
    };
  }

  private buildAddItemParams(accessToken: string, options: PocketAddItemOptions): object {
    return {
      ...options,
      consumer_key: this.consumerKey,
      access_token: accessToken,
    };
  }

  private buildSearchParams(params: object): string {
    return new URLSearchParams(params as Record<string, string>).toString();
  }

  private async sendRequest(endpoint: string, searchParams: string): Promise<Response> {
    return await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams,
    });
  }

  private handleResponseStatus(response: Response): void {
    if (response.status === 429) {
      const rateLimitInfo = processRateLimitError(response);
      console.warn("Rate limit exceeded:", rateLimitInfo);
      throw new Error(`Rate limit exceeded. User calls remaining: ${rateLimitInfo.userRemaining}, consumer key calls remaining: ${rateLimitInfo.keyRemaining}`);
    } else if (response.status !== 200) {
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
