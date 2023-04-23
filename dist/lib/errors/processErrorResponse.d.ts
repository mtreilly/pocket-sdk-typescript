interface ErrorResponseInfo {
    status: number;
    errorMessage: string;
    errorCode: number;
}
export declare function processErrorResponse(response: Response): ErrorResponseInfo;
export {};
