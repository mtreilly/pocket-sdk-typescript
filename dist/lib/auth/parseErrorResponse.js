export async function parseErrorResponse(response) {
    const errorCode = response.headers.get("X-Error-Code");
    const errorMessage = response.headers.get("X-Error");
    return {
        code: errorCode ? parseInt(errorCode, 10) : response.status,
        message: errorMessage || response.statusText,
    };
}
//# sourceMappingURL=parseErrorResponse.js.map