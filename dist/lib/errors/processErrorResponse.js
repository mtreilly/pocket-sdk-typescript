export function processErrorResponse(response) {
    const status = response.status;
    const errorMessage = response.headers.get("X-Error") || "Unknown error";
    const errorCode = parseInt(response.headers.get("X-Error-Code") || "0", 10);
    return {
        status,
        errorMessage,
        errorCode,
    };
}
//# sourceMappingURL=processErrorResponse.js.map