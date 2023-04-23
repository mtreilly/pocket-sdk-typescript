import { parseErrorResponse } from "./parseErrorResponse";
describe("parseErrorResponse", () => {
    it("should return a properly formatted error object with error code and message from headers", async () => {
        const mockResponse = new Response(null, {
            status: 400,
            headers: {
                "X-Error-Code": "123",
                "X-Error": "Test Error",
            },
        });
        const expectedErrorObject = {
            code: 123,
            message: "Test Error",
        };
        const result = await parseErrorResponse(mockResponse);
        expect(result).toEqual(expectedErrorObject);
    });
    it("should return a properly formatted error object with status code and status text if headers are missing", async () => {
        const mockResponse = new Response(null, {
            status: 500,
            statusText: "Internal Server Error",
        });
        const expectedErrorObject = {
            code: 500,
            message: "Internal Server Error",
        };
        const result = await parseErrorResponse(mockResponse);
        expect(result).toEqual(expectedErrorObject);
    });
});
//# sourceMappingURL=parseErrorResponse.test.js.map