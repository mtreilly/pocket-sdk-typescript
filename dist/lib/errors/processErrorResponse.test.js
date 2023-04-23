import { processErrorResponse } from "./processErrorResponse";
describe("processErrorResponse", () => {
    it("should return a properly formatted ErrorResponseInfo object", () => {
        const mockResponse = new Response(null, {
            status: 400,
            headers: {
                "X-Error": "Test Error",
                "X-Error-Code": "123",
            },
        });
        const expectedErrorResponseInfo = {
            status: 400,
            errorMessage: "Test Error",
            errorCode: 123,
        };
        const result = processErrorResponse(mockResponse);
        expect(result).toEqual(expectedErrorResponseInfo);
    });
    it("should handle missing headers gracefully", () => {
        const mockResponse = new Response(null, { status: 500 });
        const expectedErrorResponseInfo = {
            status: 500,
            errorMessage: "Unknown error",
            errorCode: 0,
        };
        const result = processErrorResponse(mockResponse);
        expect(result).toEqual(expectedErrorResponseInfo);
    });
});
//# sourceMappingURL=processErrorResponse.test.js.map