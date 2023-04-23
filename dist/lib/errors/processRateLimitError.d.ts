interface RateLimitInfo {
    userLimit: number;
    userRemaining: number;
    userReset: number;
    keyLimit: number;
    keyRemaining: number;
    keyReset: number;
}
export declare function processRateLimitError(response: Response): RateLimitInfo;
export {};
